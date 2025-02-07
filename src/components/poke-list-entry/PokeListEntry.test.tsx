import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PokeListEntry } from "./PokeListEntry";
import { MemoryRouter } from "react-router";

describe("PokeListEntry", () => {
  it("should render Bulbasaur if no name is passed", () => {
    const name = "Bulbasaur";
    render(
      <MemoryRouter>
        <PokeListEntry />
      </MemoryRouter>
    );
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("should render the passed pokémon name 'Pickachu'", () => {
    const name = "Pickachu";
    render(
      <MemoryRouter>
        <PokeListEntry name={name} />
      </MemoryRouter>
    );
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it.each(["Bulbasaur", "Eevee", "Pickachu"])(
    "should render the passed pokémon %s",
    (name) => {
      render(
        <MemoryRouter>
          <PokeListEntry name={name} />
        </MemoryRouter>
      );
      expect(screen.getByText(name)).toBeInTheDocument();
    }
  );
});
