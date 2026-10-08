import { testimonials } from "@/data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Testimonials from "./testimonials";

describe("Testimonials", () => {
  it("heads the section and lists every quote with its attribution", () => {
    render(<Testimonials />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Client testimonials" }),
    ).toBeVisible();
    expect(screen.getAllByRole("listitem")).toHaveLength(testimonials.length);

    for (const { quote, name, role } of testimonials) {
      expect(screen.getByText(quote)).toBeVisible();
      expect(screen.getByText(name)).toBeVisible();
      expect(screen.getByText(role)).toBeVisible();
    }
  });

  it("ties each attribution to the quote it belongs to", () => {
    const { container } = render(<Testimonials />);
    const figures = [...container.querySelectorAll("figure")];

    expect(figures).toHaveLength(testimonials.length);
    for (const [index, figure] of figures.entries()) {
      const { quote, name, role } = testimonials[index];

      expect(figure.querySelector("blockquote")).toHaveTextContent(quote);
      expect(figure.querySelector("figcaption")).toHaveTextContent(
        `${name}${role}`,
      );
    }
  });

  it("hides the portraits from assistive technology and defers them", () => {
    const { container } = render(<Testimonials />);
    const portraits = [...container.querySelectorAll("img")];

    expect(portraits).toHaveLength(testimonials.length);
    expect(screen.queryAllByRole("img")).toHaveLength(0);
    expect(
      portraits.map((portrait) => portrait.getAttribute("loading")),
    ).toEqual(portraits.map(() => "lazy"));
  });

  it("reserves room for every portrait", () => {
    const { container } = render(<Testimonials />);

    for (const portrait of container.querySelectorAll("img")) {
      expect(portrait).toHaveAttribute("width");
      expect(portrait).toHaveAttribute("height");
    }
  });
});
