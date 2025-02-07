import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetcher } from "../../api/fetcher";
import { PokemonDetailDto } from "../../api/pokeApi";
import { useEffect } from "react";
import { usePokeVisitContext } from "../../state/PokeVisitContext";

function DetailPage() {
  const { pokemonName } = useParams<"pokemonName">();
  const uri = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemon", "detail", pokemonName],
    queryFn: () => fetcher<PokemonDetailDto>(uri),
  });

  const { dispatch } = usePokeVisitContext();

  useEffect(() => {
    pokemonName &&
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

export { DetailPage };
