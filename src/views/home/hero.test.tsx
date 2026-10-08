import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "./hero";

describe("Hero", () => {
  it("opens the page with the only first-level heading", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: "We are creatives" }),
    ).toBeVisible();
  });

  it("treats the photograph as decoration and loads it first", () => {
    const { container } = render(<Hero />);
    const image = container.querySelector("img") as HTMLImageElement;

    expect(image).toHaveAttribute("alt", "");
    expect(image).toHaveAttribute("fetchpriority", "high");
    expect(image).not.toHaveAttribute("loading", "lazy");
  });

  it("reserves the desktop crop's own box before it loads", () => {
    const { container } = render(<Hero />);
    const source = container.querySelector("source") as HTMLSourceElement;

    expect(source).toHaveAttribute("media", "(min-width: 48rem)");
    expect(source).toHaveAttribute("width");
    expect(source).toHaveAttribute("height");
  });
});
