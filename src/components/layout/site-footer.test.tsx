import { navLinks, socialLinks } from "@/data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SiteFooter from "./site-footer";

describe("SiteFooter", () => {
  it("answers the Contact link in the navigation", () => {
    const { container } = render(<SiteFooter />);

    expect(container.querySelector("footer")).toHaveAttribute("id", "contact");
  });

  it("repeats the section links in their own landmark", () => {
    render(<SiteFooter />);

    const nav = screen.getByRole("navigation", { name: "Footer" });

    for (const { label, href } of navLinks) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href,
      );
    }
    expect(nav).toContainElement(screen.getByRole("link", { name: "About" }));
  });

  it("names every social link by its network", () => {
    render(<SiteFooter />);

    for (const { network, href } of socialLinks) {
      expect(
        screen.getByRole("link", { name: `sunnyside on ${network}` }),
      ).toHaveAttribute("href", href);
    }
  });

  it("labels the wordmark and hides the social glyphs", () => {
    const { container } = render(<SiteFooter />);

    expect(screen.getByRole("img", { name: "sunnyside" })).toBeVisible();
    expect(screen.queryAllByRole("img")).toHaveLength(1);
    expect(container.querySelectorAll("svg[aria-hidden='true']")).toHaveLength(
      socialLinks.length,
    );
  });

  it("carries the signature inside the footer landmark", () => {
    const { container } = render(<SiteFooter />);

    const signature = screen.getByRole("link", {
      name: "Abdelrhman Abdelaal",
    });

    expect(container.querySelector("footer")).toContainElement(signature);
    expect(signature).toHaveAttribute("rel", "noopener noreferrer");
  });
});
