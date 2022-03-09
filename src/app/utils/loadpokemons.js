import showPokemons from './showpokemons.js';

export default async function loadPokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36');
    const data = await response.json();
    const response1 = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/likes');
    const data1 = await response1.json();
    data.results.forEach((element) => {
      const { url } = element;
      fetch(url)
        .then((response2) => response2.json())
        .then((data2) => {
          showPokemons(data2, data1);
        // const cardContainer = document.querySelector(`.heart-2`);
        // cardContainer.addEventListener('click', () => {
        // console.log(`You clicked on the card 2`);
        // }
        // );
        });
    });
    // const cardContainer = document.querySelectorAll('.img-fluid');
    // console.log(cardContainer);
    // console.log('hola')
  } catch (error) {
    console.log(error);
  }
}