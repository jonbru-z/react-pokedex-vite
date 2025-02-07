import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PokeList } from "./PokeList";
import { MemoryRouter } from "react-router";

describe("PokeList", () => {
  it("Should render three list elements", () => {
    render(
      <MemoryRouter>
        <PokeList pokemons={[{ name: "a" }, { name: "b" }, { name: "a" }]} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
