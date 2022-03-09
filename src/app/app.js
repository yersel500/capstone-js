import postData from './utils/postData.js';
import loadPokemons from './utils/loadpokemons.js';
import getData from './utils/getData.js';

window.onload = () => {
  loadPokemons();

  const test = document.querySelector('.test');

  test.addEventListener('click', () => {
    console.log('click on the card');
  });

  setTimeout(() => {
    const heartArray = document.querySelectorAll('.img-fluid');
    console.log(typeof heartArray[0].classList[4]);

    const container = document.querySelector('.container');
    container.addEventListener('click', (e) => {
      heartArray.forEach((element) => {
        if (e.target.classList.contains(element.classList[4])) {
          console.log(element);
          postData('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/likes', { item_id: element.classList[4] })
            .then((data) => {
              console.log(data);
            });
          getData(element.classList[4]);
        }
      });
    });
  }, 1000);
};
