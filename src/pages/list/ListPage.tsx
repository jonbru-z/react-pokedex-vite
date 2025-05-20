import { fetcher } from "../../api/fetcher";
import { type PokemonListDto } from "../../api/pokeApi";
import { PokeList } from "../../components/poke-list/PokeList";
import {type Route} from "../../../.react-router/types/src/pages/list/+types/ListPage";

export async function loader(){
  return fetcher<PokemonListDto>("https://pokeapi.co/api/v2/pokemon");
}

function ListPage({loaderData: data}: Route.ComponentProps) {
  return <PokeList pokemons={data.results} />;
}

export default ListPage;
