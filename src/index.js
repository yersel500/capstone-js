import './main.scss';
const button = document.querySelector('.button');
const container = document.querySelector('.container');

button.addEventListener('click', loadPokemons);

async function loadPokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/25');
    const data = await response.json();
    showPokemons(data.sprites.front_default);
    console.log(data);
  }
  catch(error) {
    console.log(error);
  }
}

function showPokemons(info) {
  const card = document.createElement('div');
  card.innerHTML = `<img src=${info} alt="Pikachu">`;
  container.appendChild(card);
}

// importar app.js