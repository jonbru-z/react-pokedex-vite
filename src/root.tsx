import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";
import {useState} from "react";
import {usePokeVisit} from "./hooks/usePokeVisit/usePokeVisit";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {PokeVisitContext} from "./state/PokeVisitContext";
import {UserContext} from "./state/UserContext";

const queryClient = new QueryClient();

export function Layout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Pokedex</title>
            <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function Root() {
    const [username, setUsername] = useState("");

    const pokeVisit = usePokeVisit();

    return <PokeVisitContext.Provider value={pokeVisit}>
        <UserContext.Provider
            value={{
                username,
                setUsername,
            }}
        >
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
        </UserContext.Provider>
    </PokeVisitContext.Provider>;
}
