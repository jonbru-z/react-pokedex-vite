import { Layout } from "../components/layout/Layout";
import { ListSsrPage } from "../pages/list/ListSsrPage";
import { DetailSsrPage } from "../pages/details/DetailSsrPage";
import { fetcher } from "../api/fetcher";
import { PokemonListDto, PokemonDetailDto } from "../api/pokeApi";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "pokemon",
        loader: () =>
          fetcher<PokemonListDto>("https://pokeapi.co/api/v2/pokemon"),
        Component: ListSsrPage,
      },
      {
        path: "pokemon/:pokemonName",
        loader: ({ params }) =>
          fetcher<PokemonDetailDto>(
            `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
          ),
        Component: DetailSsrPage,
      },
    ],
  },
];
