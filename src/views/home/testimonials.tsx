import { testimonials } from "@/data";

export default function Testimonials() {
  return (
    <section className="px-6 pt-16 pb-21.5 lg:px-10 lg:py-40">
      <h2 className="text-eyebrow font-display text-muted lg:text-eyebrow-lg text-center uppercase">
        Client testimonials
      </h2>

      <ul className="max-w-page mx-auto mt-16 grid gap-16 lg:mt-20.25 lg:grid-cols-3 lg:gap-7.5">
        {testimonials.map(({ quote, name, role, avatar }) => (
          <li key={name} className="mx-auto max-w-87.5">
            <figure className="flex flex-col items-center text-center">
              <img
                src={avatar.src}
                width={avatar.width}
                height={avatar.height}
                alt=""
                loading="lazy"
                decoding="async"
                className="size-18 rounded-full"
              />
              <blockquote className="text-quote text-quote-ink mt-8 lg:mt-14.5">
                <p>{quote}</p>
              </blockquote>
              <figcaption className="mt-8 lg:mt-17.25">
                <span className="text-name font-display text-ink block">
                  {name}
                </span>
                <span className="text-role text-muted mt-2.25 block">
                  {role}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
