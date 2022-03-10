import counterItems from './utils/counterItems.js';
import loadPokemons from './utils/loadpokemons.js';

window.onload = () => {
  loadPokemons();
  counterItems();
};