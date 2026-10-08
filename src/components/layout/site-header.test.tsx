import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SiteHeader from "./site-header";

describe("SiteHeader", () => {
  it("is a banner carrying a single named navigation", () => {
    render(<SiteHeader />);

    const banner = screen.getByRole("banner");

    expect(
      within(banner).getAllByRole("navigation", { name: "Main" }),
    ).toHaveLength(1);
    expect(
      within(banner).getByRole("img", { name: "sunnyside" }),
    ).toBeVisible();
  });

  it("offers the contact call to action at both breakpoints", () => {
    render(<SiteHeader />);

    const contactLinks = screen.getAllByRole("link", { name: "Contact" });

    expect(contactLinks).toHaveLength(2);
    contactLinks.forEach((link) =>
      expect(link).toHaveAttribute("href", "#contact"),
    );
  });
});
