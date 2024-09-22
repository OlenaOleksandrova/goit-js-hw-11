
import { BASE_URL, API_KEY } from "./js/pixabay-api.js";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


function fetchImages(params) {
    const urlParams = new URLSearchParams(params);
    console.log('fetchImages urlParams:', urlParams.toString());

    return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`).then(response => {
        if (!response.ok) {
            throw new Error('Sorry, there are no images matching your search query. Please try again!');
        }
        return response.json();
    });
}

const params = {
    key: '46110623-cffeede45492ee1adb33fe3c4',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
};


const imagesBoxEl = document.querySelector('.gallery');

fetchImages(params).then(data => {
    const { hits } = data;
    
    const imagesMarkup = hits.reduce((acc, item) => {
        return (
            acc +
            `<article class="gallery-item">
                <a href="${item.largeImageURL}" class="gallery-link">
                 <img src="${item.webformatURL}" alt="${item.tags}" class="gallery-image" />
                 </a>
                 <div class="info">
                <p class="info-item">Likes: ${item.likes}</p>
                <p class="info-item">Views: ${item.views}</p>
                <p class="info-item">Comments: ${item.comments}</p>
                <p class="info-item">Downloads: ${item.downloads}</p>
                </div>
            </article>`
        );
    }, '');

    imagesBoxEl.innerHTML = imagesMarkup;

    const images = new SimpleLightbox('.gallery a', {
            captions: true,
            captionDelay: 250,
    });
    console.log(images);
            
}).catch(error => {
    iziToast.error({
        title: 'Sorry, there are no images matching your search query. Please try again!',
        message: error.message,
   
    });
 });
