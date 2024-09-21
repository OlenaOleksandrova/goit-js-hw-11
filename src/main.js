import { BASE_URL, API_KEY } from "./js/pixabay-api.js";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


function fetchImages(params) {
    const urlParams = new URLSearchParams(params);
    console.log('fetchImages urlParams:', urlParams.toString());

        return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`).then(response => {
            if (!response.ok) {
                throw new Error('Sorry, there are no images matching your search query. Please try again!')
            }
            return response.json();
        });
    }

const params = {key:'46110623-cffeede45492ee1adb33fe3c4', q: '', image_type: 'photo', orientation: 'horizontal', safesearch: 'true' };

fetchImages(params).then(data => {
    console.log(data);
});

