import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PokeListEntry } from "./PokeListEntry";

describe("PokeListEntry", () => {
  it("should render Bulbasaur if no name is passed", () => {
    const name = "Bulbasaur";
    render(<PokeListEntry />);
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("should render the passed pokémon name 'Pickachu'", () => {
    const name = "Pickachu";
    render(<PokeListEntry name={name} />);
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it.each(["Bulbasaur", "Eevee", "Pickachu"])(
    "should render the passed pokémon %s",
    (name) => {
      render(<PokeListEntry name={name} />);
      expect(screen.getByText(name)).toBeInTheDocument();
    }
  );
});
