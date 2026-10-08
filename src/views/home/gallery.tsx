import { gallery } from "@/data";

export default function Gallery() {
  return (
    <section id="projects">
      <h2 className="sr-only">Projects</h2>

      <ul className="grid grid-cols-2 md:grid-cols-4">
        {gallery.map(({ alt, desktop, mobile }) => (
          <li key={desktop.src}>
            <picture className="block">
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
                alt={alt}
                loading="lazy"
                decoding="async"
                className="block aspect-square w-full object-cover md:aspect-360/447"
              />
            </picture>
          </li>
        ))}
      </ul>
    </section>
  );
}
