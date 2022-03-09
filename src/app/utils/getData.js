export default async function getData(info) {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/likes');
  const data = await response.json();
  console.log(data);

  const numLikes = document.querySelector(`.${info}-likes`);
  console.log(numLikes);
  data.forEach((element) => {
    if (element.item_id === info) {
      numLikes.innerHTML = `${element.likes} likes`;
    }
  });
}