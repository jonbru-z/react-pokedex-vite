import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../api/fetcher";
import { type PokemonDetailDto } from "../../api/pokeApi";
import { useEffect } from "react";
import { usePokeVisitContext } from "../../state/PokeVisitContext";
import {type Route} from "../../../.react-router/types/src/pages/details/+types/DetailPage";


function DetailPage({params}: Route.ComponentProps) {
  const { pokemonName } = params
  const uri = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", "detail", pokemonName],
    queryFn: () => fetcher<PokemonDetailDto>(uri),
  });

  const { dispatch } = usePokeVisitContext();

  useEffect(() => {
    dispatch({
      type: "add",
      value: pokemonName,
    });
  }, [dispatch, pokemonName]);

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR while loading data</div>;

  return (
    <div>
      <h1>{pokemonName}</h1>
      <img src={data?.sprites.front_shiny} alt={pokemonName} />
    </div>
  );
}

export default DetailPage;
