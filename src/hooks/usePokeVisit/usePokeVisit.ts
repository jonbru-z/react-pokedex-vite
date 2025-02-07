import { useReducer } from "react";
import { PokeVisitState, PokeVisitAction } from "./types";

export const initialState: PokeVisitState = [];

export function pokeVisitReducer(
  state: PokeVisitState,
  action: PokeVisitAction
): PokeVisitState {
  switch (action.type) {
    case "add":
      return [...new Set([...state, action.value])];
    case "reset":
      return initialState;
    default:
      throw new Error("unknown action type");
  }
}

const usePokeVisit = () => {
  const [state, dispatch] = useReducer(pokeVisitReducer, initialState);
  return { state, dispatch };
};

export { usePokeVisit };
