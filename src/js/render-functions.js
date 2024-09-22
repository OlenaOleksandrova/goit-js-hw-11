import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};