const counterItems = (array) => {
  const counter = array.length;
  const counterPok = document.querySelector('.counterItems');
  const counterNav = document.querySelector('.counterPokemons');
  counterPok.innerHTML = `Choose between our ${counter} pokemons`;
  counterNav.innerHTML = `(${counter})`;
  return counter;
};

export default counterItems;
