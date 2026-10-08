import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import NavLinks from "./nav-links";

describe("NavLinks", () => {
  it("lists every section anchor in reading order", () => {
    render(<NavLinks variant="header" />);

    const links = screen.getAllByRole("link");

    expect(links.map((link) => link.textContent)).toEqual([
      "About",
      "Services",
      "Projects",
    ]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "#about",
      "#services",
      "#projects",
    ]);
  });

  it("reports a navigation so the menu can close itself", async () => {
    const onNavigate = vi.fn();
    render(<NavLinks variant="menu" onNavigate={onNavigate} />);

    await userEvent.click(screen.getByRole("link", { name: "Projects" }));

    expect(onNavigate).toHaveBeenCalledTimes(1);
  });
});
