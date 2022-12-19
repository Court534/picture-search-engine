import axios from 'axios';

const SearchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID RR7oFhACl8-SFbQs7rJd97OJ2vA5CcKEQiZacjKhIWs'
    },
    params: {
      query: 'cats',
    },
  });

  console.log(response);
  return response;
};

export default SearchImages;
