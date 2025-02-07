import { PokeListEntry } from "../poke-list-entry/PokeListEntry";
import styles from "./PokeList.module.scss";

const pokemons = [
  { name: "Bulbasaur" },
  { name: "Eevee" },
  { name: "Pickachu" },
];

export function PokeList() {
  return (
    <div className={styles.root}>
      <ul>
        {pokemons.map((pokemon) => (
          <PokeListEntry key={pokemon.name} name={pokemon.name} />
        ))}
      </ul>
    </div>
  );
}
