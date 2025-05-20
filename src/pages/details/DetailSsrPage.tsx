import { useLoaderData } from "react-router";
import { PokemonDetailDto } from "../../api/pokeApi";

export function DetailSsrPage() {
  const data = useLoaderData() as PokemonDetailDto;
  const pokemonName = data.name;
  return (
    <div>
      <span>{pokemonName}</span>
      <img src={data.sprites.front_shiny} alt={pokemonName} />
    </div>
  );
}
