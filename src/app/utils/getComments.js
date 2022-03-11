const getComments = async (id) => {
  const itemUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/comments?item_id=${id}`;
  const response = await fetch(itemUrl);
  const data = await response.json();
  return data;
  // this returns comment, username and creation_date
};

export default getComments;