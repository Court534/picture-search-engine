import axios from 'axios';

const SearchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID RR7oFhACl8-SFbQs7rJd97OJ2vA5CcKEQiZacjKhIWs'
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default SearchImages;
