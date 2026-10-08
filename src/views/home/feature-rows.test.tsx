import { features } from "@/data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FeatureRows from "./feature-rows";

describe("FeatureRows", () => {
  it("gives every row a second-level heading and its copy", () => {
    render(<FeatureRows />);

    for (const { title, body } of features) {
      expect(
        screen.getByRole("heading", { level: 2, name: title }),
      ).toBeVisible();
      expect(screen.getByText(body)).toBeVisible();
    }
  });

  it("hides the photographs from assistive technology", () => {
    const { container } = render(<FeatureRows />);
    const photos = container.querySelectorAll("img");

    expect(photos).toHaveLength(features.length);
    expect(screen.queryAllByRole("img")).toHaveLength(0);
  });

  it("defers every photograph below the first", () => {
    const { container } = render(<FeatureRows />);

    expect(
      [...container.querySelectorAll("img")].map((photo) => photo.getAttribute("loading")),
    ).toEqual(["eager", "lazy"]);
  });

  it("sends both repeated calls to action to the same place", () => {
    render(<FeatureRows />);
    const links = screen.getAllByRole("link", { name: "Learn more" });

    expect(links).toHaveLength(features.length);
    expect(new Set(links.map((link) => link.getAttribute("href"))).size).toBe(
      1,
    );
  });
});
