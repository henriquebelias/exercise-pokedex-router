export const getPokemonTypes = async () => {
  const { results } = await fetch('https://pokeapi.co/api/v2/type/')
    .then(response => response.json());
  return results;
}

export const getPokemonsByType = async (url) => {
  const pokemonsObj = await fetch(url)
    .then(response => response.json());
  return pokemonsObj;
}

export const getPokemonById = async (url) => {
  const pokemonObj = await fetch(url)
    .then(response => response.json());
  return pokemonObj;
}
