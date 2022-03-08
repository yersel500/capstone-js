import showPokemons from './showpokemons.js';

export default async function loadPokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36');
    const data = await response.json();
    data.results.forEach((element) => {
      const { url } = element;
      fetch(url)
        .then((response1) => response1.json())
        .then((data1) => {
          showPokemons(data1);
          console.log(data1);
        });
    });
  } catch (error) {
    console.log(error);
  }
}