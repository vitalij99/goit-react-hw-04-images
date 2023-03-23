import axios from 'axios';

const API_LINK = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(API_LINK, {
    method: 'get',
    params: {
      key: '33315220-d20fa579ea7477e98c433b81c',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  return response.data;
};
