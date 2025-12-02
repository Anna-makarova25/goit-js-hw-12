import axios from 'axios';

export async function getImagesByQuery(query, page = 1) {
  const API_KEY = import.meta.env.VITE_PIXABAY_KEY;
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const res = await axios.get(BASE_URL, { params });
  return res.data;
}
