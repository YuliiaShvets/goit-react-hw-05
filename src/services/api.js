import axios from "axios";

const API_KEY = 'riZB31udg9aqPphNaL5MUSs8kj3Y12iD9xKgSJYzBz4';
const BASE_URL = 'https://api.unsplash.com/search/photos';


const fetchImages = async (query, page) => {
    if (!query.trim()) {
      return [];
    }
  
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          query: query,
          client_id: API_KEY,
          per_page: 12,
          page,
        },
      });
  
      return response.data.results;

    } catch (error) {
      console.error(
        "Error fetching images:",
        error.response?.data || error.message
      );
  
      throw new Error("Failed to fetch pictures");
    }
  };
  
  export default fetchImages;