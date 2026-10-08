import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  SunnysideLogo,
  TwitterIcon,
} from "@/components/icons";
import { socialLinks } from "@/data";
import NavLinks from "./nav-links";
import Signature from "./signature";

const icons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  Pinterest: PinterestIcon,
};

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="bg-mint text-mint-ink relative flex flex-col items-center py-18"
    >
      <SunnysideLogo
        role="img"
        aria-hidden={undefined}
        aria-label="sunnyside"
        className="text-mint-mark h-8.25 w-42.5"
      />

      <nav aria-label="Footer" className="mt-10">
        <NavLinks variant="footer" />
      </nav>

      <ul className="mt-22 flex items-center gap-7">
        {socialLinks.map(({ network, href }) => {
          const Icon = icons[network];

          return (
            <li key={network}>
              <a
                href={href}
                aria-label={`sunnyside on ${network}`}
                className="v-focus text-mint-mark hover:text-mint-deep -m-2 flex p-2 motion-safe:transition-colors"
              >
                <Icon className="w-5" />
              </a>
            </li>
          );
        })}
      </ul>

      <Signature />
    </footer>
  );
}
