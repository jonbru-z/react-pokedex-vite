import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Layout } from "./components/layout/Layout";
import { DetailPage } from "./pages/details/DetailPage";
import { ListPage } from "./pages/list/ListPage";
import "./styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProfilePage } from "./pages/profile/ProfilePage";

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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
