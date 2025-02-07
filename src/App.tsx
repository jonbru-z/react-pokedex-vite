import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Layout } from "./components/layout/Layout";
import { DetailPage } from "./pages/details/DetailPage";
import { ListPage } from "./pages/list/ListPage";
import "./styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { useState } from "react";
import { PokeVisitContext } from "./state/PokeVisitContext";
import { UserContext } from "./state/UserContext";
import { usePokeVisit } from "./hooks/usePokeVisit/usePokeVisit";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "pokemon",
        element: <ListPage />,
      },
      {
        path: "pokemon/:pokemonName",
        element: <DetailPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);


function App() {
  const [username, setUsername] = useState("");

  const pokeVisit = usePokeVisit();
  
  return (
    <PokeVisitContext.Provider value={pokeVisit}>
      <UserContext.Provider
        value={{
          username,
          setUsername,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </UserContext.Provider>
    </PokeVisitContext.Provider>
  );
}

export default App;
