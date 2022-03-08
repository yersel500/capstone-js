import heart from '../../assets/heart.svg';

const container = document.querySelector('.container');

export default function showPokemons(info) {
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