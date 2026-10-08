"use client";

import { HamburgerIcon } from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import ContactLink from "./contact-link";
import NavLinks from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);

    const behind = document.querySelectorAll("main, footer");
    behind.forEach((element) => element.setAttribute("inert", ""));

    const { scrollY } = window;
    const { style } = document.body;
    style.position = "fixed";
    style.insetInline = "0";
    style.top = `${-scrollY}px`;

    const toggle = toggleRef.current;

    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      behind.forEach((element) => element.removeAttribute("inert"));
      style.position = "";
      style.insetInline = "";
      style.top = "";
      window.scrollTo(0, scrollY);
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  const closeOnEscape = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") close();
  };

  const closeOnBackdrop = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <div className="lg:hidden" onKeyDown={closeOnEscape}>
      <button
        ref={toggleRef}
        type="button"
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Menu"
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="v-focus-on-photo -m-3.5 flex p-3.5 text-white"
      >
        <HamburgerIcon />
      </button>

      <div
        onClick={closeOnBackdrop}
        className={`fixed inset-0 z-50 motion-safe:transition-[opacity,visibility] motion-safe:duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          id="mobile-menu"
          className={`v-menu-card bg-cream absolute top-26.5 right-6 flex origin-top-right flex-col items-center gap-8 py-9.75 motion-safe:transition-transform motion-safe:duration-300 ${
            open ? "scale-100" : "scale-96"
          }`}
        >
          <div className="bg-cream absolute -top-6 right-0 size-6 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
          <NavLinks variant="menu" onNavigate={close} />
          <ContactLink variant="menu" onNavigate={close} />
        </div>
      </div>
    </div>
  );
}
