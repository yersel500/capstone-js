import countItems from './countItems';
import loadPokemons from './loadpokemons';

export default async function counterItems() {
  await loadPokemons();
  const newheartTest = Array.from(document.getElementsByClassName('openComments'));
  const myItems = countItems(newheartTest);
  const counterPok = document.querySelector('.counterItems');
  counterPok.innerHTML = `Choose between our ${myItems} pokemons`;
  return newheartTest.length;
}
