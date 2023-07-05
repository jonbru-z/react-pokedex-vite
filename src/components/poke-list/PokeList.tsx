import { PokeListEntry } from "../poke-list-entry/PokeListEntry";

const pokemons = [
  { name: "Bulbasaur" },
  { name: "Eevee" },
  { name: "Pickachu" },
];

export function PokeList() {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <PokeListEntry key={pokemon.name} name={pokemon.name} />
      ))}
    </ul>
  );
}
