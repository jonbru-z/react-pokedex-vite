import { useLoaderData } from "react-router";
import { PokemonListDto } from "../../api/pokeApi";
import { PokeList } from "../../components/poke-list/PokeList";

export function ListSsrPage() {
  const data = useLoaderData() as PokemonListDto;
  return <PokeList pokemons={data?.results ?? []} />;
}
