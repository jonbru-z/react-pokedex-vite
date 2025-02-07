import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Layout } from "./components/layout/Layout";
import { DetailPage } from "./pages/details/DetailPage";
import { ListPage } from "./pages/list/ListPage";
import "./styles/global.scss";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
