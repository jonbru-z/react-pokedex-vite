type PokeListEntryProps = {
  name?: string;
};
export function PokeListEntry({ name = "Bulbasaur" }: PokeListEntryProps) {
  return <li>{name}</li>;
}
