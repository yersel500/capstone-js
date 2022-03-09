import heart from '../../assets/heart.svg';
import getComments from './getComments.js';
import postComments from './postComments.js';

const container = document.querySelector('.container');

export default function showPokemons(info) {
  let pokeType = '';
  info.types.forEach((element) => {
    pokeType += `${element.type.name} `;
  });
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
        <button type="button" class="btn btn-primary d-block mx-auto mb-2 openComments" data-bs-toggle="modal" data-bs-target="#pokeModal-${info.id}" id="item${info.id}" >Comments</button>
      </div>
    </div>
  </div>
  <div class="modal fade" id="pokeModal-${info.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
    <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <div class="modal-body text-center">
      <img clas="img-fluid" src=${info.sprites.front_default} alt=${info.name}>
      <h3 class="modal-title" id="exampleModalLabel">${info.name}</h3>
        <div>
          <p>Type: <br>${pokeType}</p>
        </div>
        <p>Weight: ${info.weight}</p>
        <p>Height: ${info.height}</p>
        <div>
      </div>
      <div class="displayCommentsSection-item${info.id}">
      </div>
      <div>
        <h5>Add a comment</h5>
        <input type="text" class="item${info.id}" placeholder="Your name"><br>
        <textarea class="item${info.id}" name="textarea" rows="5" cols="25" placeholder="Leave your comment"></textarea><br>
        <button type="button" class="btn btn-primary btn-lg btn-block comment-btn" id="item${info.id}">Comment</button>
      </div>
    </div>
  </div>
</div>`;
  const openComments = Array.from(document.getElementsByClassName('openComments'));
  openComments.forEach((element) => {
    element.addEventListener('click', (e) => {
      (async () => {
        const itemID = e.target.id;
        const commmentsData = Array.from(await getComments(itemID));
        const commentCounter = commmentsData.length;
        if (commentCounter !== 0) {
          const commentsSection = document.querySelector(`.displayCommentsSection-${itemID}`);
          commentsSection.innerHTML = `
          <h5>Comments (${commentCounter})</h5> 
        `;
          commmentsData.forEach((el) => {
            commentsSection.innerHTML += `
          <p>${el.creation_date} ${el.username} : ${el.comment}</p>
        `;
          });
        }
        const commentBtns = Array.from(document.getElementsByClassName('comment-btn'));
        commentBtns.forEach((commentBtn) => {
          commentBtn.addEventListener('click', (e) => {
            const targetId = e.target.id;
            const nameValue = document.querySelector(`input.${targetId}`);
            const commentValue = document.querySelector(`textarea.${targetId}`);
            if (nameValue.value !== '' && commentValue.value !== '') {
              postComments(targetId, nameValue.value, commentValue.value);
              nameValue.value = '';
              commentValue.value = '';
            }
          });
        });
      })();
    });
  });
}