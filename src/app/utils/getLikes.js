export default async function getComments(id) {
  const itemUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/likes?item_id=${id}`;
  const response = await fetch(itemUrl);
  const data = await response.json();
  return data;
  // this returns item_id and likes
}