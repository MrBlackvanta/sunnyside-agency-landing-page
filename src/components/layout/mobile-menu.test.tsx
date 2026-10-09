import { setMediaMatches } from "@/test/match-media";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import MobileMenu from "./mobile-menu";

const DESKTOP = "(min-width: 64rem)";

function renderMenu() {
  const main = document.createElement("main");
  document.body.append(main);
  const { container } = render(<MobileMenu />);
  const toggle = screen.getByRole("button", { name: "Menu" });
  const panel = container.querySelector("#mobile-menu") as HTMLElement;

  return { main, toggle, panel, backdrop: panel.parentElement as HTMLElement };
}

describe("MobileMenu", () => {
  it("starts collapsed and names the panel it controls", () => {
    const { toggle, panel } = renderMenu();

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", panel.id);
  });

  it("keeps the toggle reachable so it can also close the menu", async () => {
    const { toggle, panel } = renderMenu();

    await userEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle.closest("[inert]")).toBeNull();
    expect(within(panel).getAllByRole("link")).toHaveLength(4);

    await userEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("seals the page behind it and releases it again", async () => {
    const { toggle, main } = renderMenu();

    await userEvent.click(toggle);

    expect(main).toHaveAttribute("inert");
    expect(document.body.style.position).toBe("fixed");

    await userEvent.click(toggle);

    expect(main).not.toHaveAttribute("inert");
    expect(document.body.style.position).toBe("");
    expect(toggle).toHaveFocus();
  });

  it("closes on Escape", async () => {
    const { toggle } = renderMenu();

    await userEvent.click(toggle);
    await userEvent.keyboard("{Escape}");

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes when the backdrop beside the panel is clicked", async () => {
    const { toggle, backdrop } = renderMenu();

    await userEvent.click(toggle);
    await userEvent.click(backdrop);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("stays open when the panel itself is clicked", async () => {
    const { toggle, panel } = renderMenu();

    await userEvent.click(toggle);
    await userEvent.click(panel);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });

  it("closes once a section anchor is followed", async () => {
    const { toggle } = renderMenu();

    await userEvent.click(toggle);
    await userEvent.click(screen.getByRole("link", { name: "About" }));

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("brings the chosen section into view once the page is unsealed", async () => {
    const { toggle, main } = renderMenu();
    const services = document.createElement("section");
    services.id = "services";
    services.scrollIntoView = vi.fn(() => {
      expect(main).not.toHaveAttribute("inert");
      expect(document.body.style.position).toBe("");
    });
    main.append(services);

    await userEvent.click(toggle);
    await userEvent.click(screen.getByRole("link", { name: "Services" }));

    expect(services.scrollIntoView).toHaveBeenCalledOnce();
  });

  it("leaves the reader where they were when the menu is merely dismissed", async () => {
    const { toggle, main } = renderMenu();
    const services = document.createElement("section");
    services.id = "services";
    services.scrollIntoView = vi.fn();
    main.append(services);

    await userEvent.click(toggle);
    await userEvent.keyboard("{Escape}");

    expect(services.scrollIntoView).not.toHaveBeenCalled();
  });

  it("closes when the viewport grows past the desktop header", async () => {
    const { toggle } = renderMenu();

    await userEvent.click(toggle);
    setMediaMatches(DESKTOP, true);

    await waitFor(() =>
      expect(toggle).toHaveAttribute("aria-expanded", "false"),
    );
  });
});
