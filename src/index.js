import './main.scss';
const button = document.querySelector('.button');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');

button.addEventListener('click', loadPokemons);

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
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  `;
}

// importar app.js