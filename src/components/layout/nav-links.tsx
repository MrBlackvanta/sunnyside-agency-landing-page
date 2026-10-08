import { navLinks } from "@/data";

type NavLinksVariant = "header" | "menu";

const variants: Record<NavLinksVariant, { list: string; link: string }> = {
  header: {
    list: "hidden items-center gap-11.75 lg:flex",
    link: "text-nav v-bar v-focus-on-photo text-white",
  },
  menu: {
    list: "flex flex-col items-center gap-8",
    link: "text-menu v-focus text-copy hover:text-ink motion-safe:transition-colors",
  },
};

type NavLinksProps = {
  variant: NavLinksVariant;
  onNavigate?: () => void;
};

export default function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const { list, link } = variants[variant];

  return (
    <ul className={list}>
      {navLinks.map(({ label, href }) => (
        <li key={href}>
          <a href={href} onClick={onNavigate} className={`block ${link}`}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
