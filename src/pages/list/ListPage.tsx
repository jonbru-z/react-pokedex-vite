import { PokeList } from "../../components/poke-list/PokeList";
import { pokemonList } from "../../mockData/list";

function ListPage() {
  return <PokeList pokemons={pokemonList.results} />;
}

export { ListPage };
