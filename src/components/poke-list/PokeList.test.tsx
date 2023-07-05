import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PokeList } from "./PokeList";

describe("PokeList", () => {
  it("Should render three list elements", () => {
    render(<PokeList />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
