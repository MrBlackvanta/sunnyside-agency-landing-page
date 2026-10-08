import graphicDesktop from "@/assets/image-graphic-design-desktop.webp";
import graphicMobile from "@/assets/image-graphic-design-mobile.webp";
import photographyDesktop from "@/assets/image-photography-desktop.webp";
import photographyMobile from "@/assets/image-photography-mobile.webp";

export const services = [
  {
    title: "Graphic Design",
    body: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    desktop: graphicDesktop,
    mobile: graphicMobile,
    tone: "graphic",
  },
  {
    title: "Photography",
    body: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    desktop: photographyDesktop,
    mobile: photographyMobile,
    tone: "photo",
  },
] as const;
