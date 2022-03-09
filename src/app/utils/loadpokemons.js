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
        showPokemons(data1)
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
  ;
  } 
  catch (error) {
    console.log(error);
  }
}