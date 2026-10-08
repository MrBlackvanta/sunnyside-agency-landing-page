import standOut from "@/assets/image-stand-out.webp";
import transform from "@/assets/image-transform.webp";

const learnMoreHref = "#services";

export const features = [
  {
    title: "Transform your brand",
    body: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    image: transform,
    accent: "yellow",
    href: learnMoreHref,
  },
  {
    title: "Stand out to the right audience",
    body: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    image: standOut,
    accent: "red",
    href: learnMoreHref,
  },
] as const;
