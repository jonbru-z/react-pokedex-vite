import { PokeListEntry } from "../poke-list-entry/PokeListEntry";
import styles from "./PokeList.module.scss";

interface Props {
  pokemons: { name: string }[];
}

export function PokeList({ pokemons }: Props) {
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
