import { fetcher } from "../../api/fetcher";
import { type PokemonDetailDto } from "../../api/pokeApi";
import { useEffect } from "react";
import { usePokeVisitContext } from "../../state/PokeVisitContext";
import {type Route} from "../../../.react-router/types/src/pages/details/+types/DetailPage";
import {data} from "react-router";

export async function loader({params}: Route.ComponentProps) {
  const { pokemonName } = params
  const uri = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  try{
  return fetcher<PokemonDetailDto>(uri);
  }catch {
    throw data("Pokemon Not Found", { status: 404 });
  }
}

function DetailPage({loaderData: data, params: {pokemonName}}: Route.ComponentProps) {
  const { dispatch } = usePokeVisitContext();

  useEffect(() => {
    dispatch({
      type: "add",
      value: pokemonName,
    });
  }, [dispatch, pokemonName]);

  return (
    <div>
      <h1>{pokemonName}</h1>
      <img src={data?.sprites.front_shiny} alt={pokemonName} />
    </div>
  );
}

export default DetailPage;
