import emil from "@/assets/avatars/image-emil.webp";
import jonah from "@/assets/avatars/image-jonah.webp";
import thomas from "@/assets/avatars/image-thomas.webp";

export const testimonials = [
  {
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emil R.",
    role: "Marketing Director",
    avatar: emil,
  },
  {
    quote:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    role: "Chief Operating Officer",
    avatar: thomas,
  },
  {
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jonah F.",
    role: "Business Owner",
    avatar: jonah,
  },
] as const;
