import showPokemons from './showpokemons.js';

export default async function loadPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36');
  const data = await response.json();
  console.log(data.results);

  data.results.forEach((element) => {
    const { url } = element;
    fetch(url)
      .then((response1) => response1.json())
      .then((data1) => showPokemons(data1));
  });

}