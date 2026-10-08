import { services } from "@/data";

const tones = {
  graphic: "text-graphic",
  photo: "text-photo",
};

export default function ServicePanels() {
  return (
    <section id="services" className="lg:grid lg:grid-cols-2">
      {services.map(({ title, body, desktop, mobile, tone }) => (
        <div key={title} className="relative h-150">
          <picture>
            <source
              media="(min-width: 48rem)"
              srcSet={desktop.src}
              width={desktop.width}
              height={desktop.height}
            />
            <img
              src={mobile.src}
              width={mobile.width}
              height={mobile.height}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </picture>
          <div
            className={`relative flex h-full flex-col items-center justify-end px-6 pb-14.75 text-center ${tones[tone]}`}
          >
            <h2 className="text-service font-display">{title}</h2>
            <p className="text-lead mt-6.75 max-w-84.75">{body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
