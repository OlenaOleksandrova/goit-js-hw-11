export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '46110623-cffeede45492ee1adb33fe3c4';

// // Функція для запиту зображень
// export const fetchImages = params => {
//     const urlParams = new URLSearchParams(params);
//     // console.log('fetchImages urlParams:', urlParams.toString());

//     return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`
//     )
//         .then(response => {
//         if (!response.ok) {
//             throw new Error('Sorry, there are no images matching your search query. Please try again!');
//         }
//         return response.json();
//     })
//     .then(data => data.hits);
// };

export function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data.hits;
    });
}