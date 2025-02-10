import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDBjYTg0NzU4MDQwNTVlMzRjYmJlNGQzZWVhOTRkZiIsIm5iZiI6MTczODkyMTU0MC4xNDcsInN1YiI6IjY3YTVkNjQ0OTM3ZDJlOWI2MDY2Y2JiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CenS6y7X31QMLdscvie5tglmfcLFRn296Hjfj263ZSE'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

export async function fetchTrendingMovies() {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
}

export async function searchMovies(query) {
  const response = await api.get("/search/movie", {
      params: { query },
  });
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
}