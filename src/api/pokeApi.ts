export type PokemonListDto = {
  results: PokemonBase[];
};
export type PokemonDetailDto = PokemonBase & {
  sprites: {
    front_shiny: string;
  };
  stats: Stat[];
};
type PokemonBase = {
  name: string;
};
type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};
