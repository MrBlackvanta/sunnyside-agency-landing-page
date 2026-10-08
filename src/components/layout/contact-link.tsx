import { contactHref } from "@/data";

type ContactLinkVariant = "header" | "menu";

const variants: Record<ContactLinkVariant, string> = {
  header: "v-focus-on-photo bg-white hover:bg-white/25",
  menu: "v-focus bg-yellow hover:bg-yellow/25",
};

type ContactLinkProps = {
  variant: ContactLinkVariant;
  onNavigate?: () => void;
};

export default function ContactLink({ variant, onNavigate }: ContactLinkProps) {
  return (
    <a
      href={contactHref}
      onClick={onNavigate}
      className={`text-pill font-display text-ink inline-flex h-14 w-35 items-center justify-center rounded-full uppercase motion-safe:transition-colors ${variants[variant]}`}
    >
      Contact
    </a>
  );
}
