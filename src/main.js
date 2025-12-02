import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const formElement = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.js-btn');

const PAGE_SIZE = 15;
let totalPages;
let query;
let currentPage;

formElement.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  query = formData.get('search-text').trim();
  showLoader();
  clearGallery();
  hideLoadMoreButton();
  currentPage = 1;
  try {
    const res = await getImagesByQuery(query, currentPage);
    const { hits } = res;
    totalPages = Math.ceil(res.totalHits / PAGE_SIZE);
    if (hits.length === 0) {
      iziToast.error({
        message: 'No images found. Try another query.',
        position: 'topRight',
      });
      return;
    }
    createGallery(hits);
    if (res.totalHits > PAGE_SIZE) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Request failed',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    e.target.reset();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  hideLoadMoreButton();
  showLoader();
  const res = await getImagesByQuery(query, currentPage);
  createGallery(res.hits);
  hideLoader();
  showLoadMoreButton();
  smoothScroll();
  checkBtnStatus();
});

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const cardHeight = galleryItem.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function checkBtnStatus() {
  if (currentPage < totalPages) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results",
      position: 'topRight',
    });
  }
}
