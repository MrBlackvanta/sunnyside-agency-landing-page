import { services } from "@/data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ServicePanels from "./service-panels";

describe("ServicePanels", () => {
  it("gives every panel a second-level heading and its copy", () => {
    render(<ServicePanels />);

    for (const { title, body } of services) {
      expect(
        screen.getByRole("heading", { level: 2, name: title }),
      ).toBeVisible();
      expect(screen.getByText(body)).toBeVisible();
    }
  });

  it("hides the photographs from assistive technology and defers them", () => {
    const { container } = render(<ServicePanels />);
    const photos = [...container.querySelectorAll("img")];

    expect(photos).toHaveLength(services.length);
    expect(screen.queryAllByRole("img")).toHaveLength(0);
    expect(photos.map((photo) => photo.getAttribute("loading"))).toEqual(
      photos.map(() => "lazy"),
    );
  });

  it("art-directs each photograph to a wider crop past the stacked layout", () => {
    const { container } = render(<ServicePanels />);
    const sources = [...container.querySelectorAll("source")];

    expect(sources).toHaveLength(services.length);
    for (const source of sources) {
      expect(source).toHaveAttribute("media", "(min-width: 48rem)");
      expect(source).toHaveAttribute("width");
      expect(source).toHaveAttribute("height");
    }
  });

  it("answers the Services link in the navigation", () => {
    const { container } = render(<ServicePanels />);

    expect(container.querySelector("section")).toHaveAttribute(
      "id",
      "services",
    );
  });
});
