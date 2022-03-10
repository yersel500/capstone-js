import counterItems from './counterItems.js';
import showPokemons from './showpokemons.js';

export default async function loadPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36');
  const pokemons = await response.json();
  const response1 = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/likes');
  const likes = await response1.json();
  pokemons.results.forEach((element) => {
    const { url } = element;
    fetch(url)
      .then((pokemonInfo) => pokemonInfo.json())
      .then((pokemonData) => showPokemons(pokemonData, likes));
  });
  counterItems(pokemons.results);
}