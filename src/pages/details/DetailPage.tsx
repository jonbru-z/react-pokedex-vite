import { useParams } from "react-router";
import { pokeDetails } from "../../mockData/details";

function DetailPage() {
  const { pokemonName } = useParams<"pokemonName">();
  const pokemon = pokeDetails.find((p) => p.name === pokemonName);
  return (
    <div>
      <span>{pokemonName}</span>
      <img src={pokemon?.sprites.front_shiny} alt={pokemonName} />
    </div>
  );
}
export { DetailPage };
