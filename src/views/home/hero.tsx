import headerDesktop from "@/assets/image-header-desktop.webp";
import headerMobile from "@/assets/image-header-mobile.webp";
import { ArrowDownIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="v-hero-band bg-sky relative">
      <picture className="max-w-shell absolute inset-0 mx-auto block">
        <source
          media="(min-width: 48rem)"
          srcSet={headerDesktop.src}
          width={headerDesktop.width}
          height={headerDesktop.height}
        />
        <img
          src={headerMobile.src}
          width={headerMobile.width}
          height={headerMobile.height}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover"
        />
      </picture>
      <div className="bg-scrim absolute inset-0" />
      <div className="relative flex flex-col items-center px-6 pt-36 lg:pt-48.75">
        <h1 className="text-hero-sm font-display xs:text-hero lg:text-hero-lg me-[-0.15625em] text-center text-white uppercase">
          We are creatives
        </h1>
        <ArrowDownIcon className="mt-12.25 text-white lg:mt-23.5" />
      </div>
    </section>
  );
}
