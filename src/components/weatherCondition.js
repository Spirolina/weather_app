import apiKeys from "../apiKeys";

export default async function weatherCondition(condition) {
  const img = document.querySelector('img');

  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKeys.GIF}&s=${condition}`, {
    mode: 'cors',

    headers: {
      'Content-Type': 'text/html',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

  });
  const data = await response.json();
  const url = await data.data.images.original.url;
  img.src = url;
}
