
// import 'izitoast/dist/css/iziToast.min.css';


import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Функція для відображення зображень
export const renderImages = hits => {
  const imagesBoxEl = document.querySelector('.gallery');
  imagesBoxEl.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
    
  const imagesMarkup = hits.reduce((acc, item) => {
    return (
      acc +
      `<div class="gallery-item">
                <a href="${item.largeImageURL}" class="gallery-link">
                 <img src="${item.webformatURL}" alt="${item.tags}" class="gallery-image" />
                 </a>
                 <ul class="info">
                    <li class="info-item">Likes: ${item.likes}</li>
                    <li class="info-item">Views: ${item.views}</li>
                    <li class="info-item">Comments: ${item.comments}</li>
                    <li class="info-item">Downloads: ${item.downloads}</li>
                 </ul>
            </div>`
    );
  }, '');

  imagesBoxEl.innerHTML = imagesMarkup;

  // const images = new SimpleLightbox('.gallery a', {
  //     captions: true,
  //     captionDelay: 250,
  // });
  // console.log(images);
};


export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};