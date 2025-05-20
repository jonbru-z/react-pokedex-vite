import {type RouteConfig, route} from "@react-router/dev/routes";

export default [
    route("/", "components/layout/Layout.tsx", [
        route('pokemon', 'pages/list/ListPage.tsx'),
        route('pokemon/:pokemonName', 'pages/details/DetailPage.tsx'),
        route('profile', 'pages/profile/ProfilePage.tsx'),
    ])
] satisfies RouteConfig;
