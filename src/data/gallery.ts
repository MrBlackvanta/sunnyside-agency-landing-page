import coneDesktop from "@/assets/gallery/image-cone-desktop.webp";
import coneMobile from "@/assets/gallery/image-cone-mobile.webp";
import milkbottlesDesktop from "@/assets/gallery/image-milkbottles-desktop.webp";
import milkbottlesMobile from "@/assets/gallery/image-milkbottles-mobile.webp";
import orangeDesktop from "@/assets/gallery/image-orange-desktop.webp";
import orangeMobile from "@/assets/gallery/image-orange-mobile.webp";
import sugarcubesDesktop from "@/assets/gallery/image-sugarcubes-desktop.webp";
import sugarcubesMobile from "@/assets/gallery/image-sugarcubes-mobile.webp";

export const gallery = [
  {
    alt: "Milk bottles with red caps standing under a cotton-wool cloud against a blue sky",
    desktop: milkbottlesDesktop,
    mobile: milkbottlesMobile,
  },
  {
    alt: "Half an orange resting on stacked white and teal plates against a bright orange background",
    desktop: orangeDesktop,
    mobile: orangeMobile,
  },
  {
    alt: "An empty waffle cone photographed against a blue background",
    desktop: coneDesktop,
    mobile: coneMobile,
  },
  {
    alt: "A wall of white sugar cubes stacked against a coral background",
    desktop: sugarcubesDesktop,
    mobile: sugarcubesMobile,
  },
] as const;
