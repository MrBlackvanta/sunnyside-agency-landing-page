import { features } from "@/data";

const accents = {
  yellow: {
    link: "after:bg-yellow/25 hover:after:bg-yellow",
    ground: "bg-ground-yellow",
  },
  red: {
    link: "after:bg-red/25 hover:after:bg-red",
    ground: "bg-ground-red",
  },
};

const alternating = [
  {
    image: "lg:order-last lg:justify-start",
    text: "lg:v-row-text-start lg:justify-start",
  },
  { image: "lg:justify-end", text: "lg:v-row-text-end lg:justify-end" },
];

export default function FeatureRows() {
  return (
    <section id="about">
      {features.map(({ title, body, image, accent, href }, index) => {
        const side = alternating[index % alternating.length];
        const { link, ground } = accents[accent];

        return (
          <div key={title} className="lg:grid lg:grid-cols-2">
            <div className={`flex ${ground} ${side.image}`}>
              <img
                src={image.src}
                width={image.width}
                height={image.height}
                alt=""
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="aspect-6/5 max-h-150 w-full object-cover lg:max-w-180"
              />
            </div>
            <div
              className={`flex items-center justify-center px-6 py-16 lg:px-0 ${side.text}`}
            >
              <div className="flex w-full max-w-111.25 flex-col items-center text-center lg:items-start lg:text-start">
                <h2 className="text-title font-display lg:text-title-lg text-ink">
                  {title}
                </h2>
                <p className="text-body mt-6 lg:mt-8">{body}</p>
                <a
                  href={href}
                  className={`text-action font-display v-learn-more v-focus text-ink mt-8 uppercase lg:mt-10 ${link}`}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
