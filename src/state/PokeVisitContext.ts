import { createContext, useContext } from "react";
import { PokeVisitAction, PokeVisitState } from "../hooks/usePokeVisit/types";

type PokeVisitContextValue = {
  state: PokeVisitState;
  dispatch: (value: PokeVisitAction) => void;
};

export const PokeVisitContext = createContext<
  PokeVisitContextValue | undefined
>(undefined);

export function usePokeVisitContext(): PokeVisitContextValue {
  const context = useContext(PokeVisitContext);
  if (!context) throw new Error("…");
  return context;
}
