import { gallery } from "@/data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Gallery from "./gallery";

describe("Gallery", () => {
  it("answers the Projects link in the navigation", () => {
    const { container } = render(<Gallery />);

    expect(container.querySelector("section")).toHaveAttribute(
      "id",
      "projects",
    );
    expect(
      screen.getByRole("heading", { level: 2, name: "Projects" }),
    ).toBeInTheDocument();
  });

  it("lists every photograph with its own description", () => {
    render(<Gallery />);

    expect(screen.getAllByRole("listitem")).toHaveLength(gallery.length);
    for (const { alt } of gallery) {
      expect(screen.getByRole("img", { name: alt })).toBeVisible();
    }
  });

  it("art-directs each photograph to a taller crop past the stacked layout", () => {
    const { container } = render(<Gallery />);
    const sources = [...container.querySelectorAll("source")];

    expect(sources).toHaveLength(gallery.length);
    for (const source of sources) {
      expect(source).toHaveAttribute("media", "(min-width: 48rem)");
      expect(source).toHaveAttribute("width");
      expect(source).toHaveAttribute("height");
    }
  });

  it("defers every photograph and reserves its box", () => {
    const { container } = render(<Gallery />);
    const photos = [...container.querySelectorAll("img")];

    expect(photos).toHaveLength(gallery.length);
    for (const photo of photos) {
      expect(photo).toHaveAttribute("loading", "lazy");
      expect(photo).toHaveAttribute("width");
      expect(photo).toHaveAttribute("height");
    }
  });
});
