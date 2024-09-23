
// import { BASE_URL, API_KEY } from "./js/pixabay-api.js";
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";


// function fetchImages(params) {
//     const urlParams = new URLSearchParams(params);
//     console.log('fetchImages urlParams:', urlParams.toString());

//     return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`).then(response => {
//         if (!response.ok) {
//             throw new Error('Sorry, there are no images matching your search query. Please try again!');
//         }
//         return response.json();
//     });
// }

// const params = {
//     key: '46110623-cffeede45492ee1adb33fe3c4',
//     q: '',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true'
// };


// const imagesBoxEl = document.querySelector('.gallery');

// fetchImages(params).then(data => {
//     const { hits } = data;
    
//     const imagesMarkup = hits.reduce((acc, item) => {
//         return (
//             acc +
//             `<article class="gallery-item">
//                 <a href="${item.largeImageURL}" class="gallery-link">
//                  <img src="${item.webformatURL}" alt="${item.tags}" class="gallery-image" />
//                  </a>
//                  <ul class="info">
//                 < liclass="info-item">Likes: ${item.likes}<li/>
//                 <li class="info-item">Views: ${item.views}</li>
//                 <li class="info-item">Comments: ${item.comments}</li>
//                 <li class="info-item">Downloads: ${item.downloads}</li>
//                 </ul>
//             </article>`
//         );
//     }, '');

//     imagesBoxEl.innerHTML = imagesMarkup;

//     const images = new SimpleLightbox('.gallery a', {
//             captions: true,
//             captionDelay: 250,
//     });
//     console.log(images);
            
// }).catch(error => {
//     iziToast.error({
//         title: 'Sorry, there are no images matching your search query. Please try again!',
//         message: error.message,
   
//     });
//  });





import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import { BASE_URL, API_KEY } from "./js/pixabay-api.js";

// Виправлення на формі
const searchForm = document.querySelector('.search-form');
 const gallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionDelay: 250,
 });
    
searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim(); // Отримуємо значення введеного пошукового запиту
    if (!query) {
        return;
    };
    
    showLoader();

  fetchImages(query)
    .then(images => {
      renderImages(images);
      gallery.refresh();
    })
      .catch(error => {
        
    iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
   
    });
    })
    .finally(() => {
      hideLoader();
    });
});


