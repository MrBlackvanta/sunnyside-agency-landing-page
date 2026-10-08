import { SunnysideLogo } from "@/components/icons";
import ContactLink from "./contact-link";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="max-w-shell absolute inset-x-0 top-0 z-10 mx-auto flex items-center px-6 pt-8 lg:px-10 lg:pt-8.5">
      <SunnysideLogo
        role="img"
        aria-hidden={undefined}
        aria-label="sunnyside"
        className="h-6 w-31 text-white lg:h-8.25 lg:w-42.5"
      />
      <nav aria-label="Main" className="ml-auto flex items-center gap-11.75">
        <NavLinks variant="header" />
        <div className="hidden lg:block">
          <ContactLink variant="header" />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
