import './main.scss';
import heart from './assets/heart.svg';
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');


window.onload = () => {
  loadPokemons();
};

async function loadPokemons() {
  for ( let i=1; i <= 36; i += 1) {
    // try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      showPokemons(data);
      console.log(data);
    // }
    // catch(error) {
    //   console.log(error);
    // }
  }

}

function showPokemons(info) {
 
  container.innerHTML += `
  <div class="col">
    <div class="card h-100">
      <img src=${info.sprites.front_default} class="card-img-top" alt=${info.name}>
      <div class="card-body">
        <div class= "d-flex justify-content-between">
        <h5 class="card-title d-inline">${info.name}</h5>
        <img src="${heart}" class="img-fluid d-inline w-25" alt="like">
        </div>
        <p>This is a description of the pokemon</p>
        <button type="button" class="btn btn-primary d-block mx-auto mb-2">Comments</button>
      </div>
    </div>
  </div>
  `;
}

// importar app.js