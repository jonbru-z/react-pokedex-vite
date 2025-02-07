import { Layout } from "./components/layout/Layout";
import { PokeList } from "./components/poke-list/PokeList";
import "./styles/global.scss";

function App() {
  return (
    <Layout>
      <PokeList />
    </Layout>
  );
}

export default App;
