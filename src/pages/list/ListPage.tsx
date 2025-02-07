import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../api/fetcher";
import { PokemonListDto } from "../../api/pokeApi";
import { PokeList } from "../../components/poke-list/PokeList";

function ListPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: () => fetcher<PokemonListDto>("https://pokeapi.co/api/v2/pokemon"),
  });
  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR while loading data</div>;
  return <PokeList pokemons={data?.results ?? []} />;
}

export { ListPage };
