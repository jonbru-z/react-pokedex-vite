export async function fetcher<T>(uri: string, init?: RequestInit): Promise<T> {
  const response = await fetch(uri, init);
  if (!response.ok) throw new Error("Could not fetch data!");
  return response.json();
}
