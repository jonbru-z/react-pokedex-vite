export type AddPokeVisitAction = {
  type: "add";
  value: string;
};

export type ResetPokeVisitAction = {
  type: "reset";
};

export type PokeVisitAction = AddPokeVisitAction | ResetPokeVisitAction;

export type PokeVisitState = string[];
