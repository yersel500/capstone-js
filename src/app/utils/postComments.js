export default async function postComments(id, user, text) {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FBTV7LVQNoUbR7Qxl6jA/comments', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: text,
    }),
  });
}