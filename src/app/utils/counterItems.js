import loadPokemons from "./loadpokemons";

export default async function counterItems() {

await loadPokemons();
const newheartTest = Array.from(document.getElementsByClassName('img-heart'));

const counterPok = document.querySelector('.counterItems');
counterPok.innerHTML = `Choose between our ${newheartTest.length} pokemons`;
}