import axios from 'axios';

//Constants
const API_KEY = 'api_key=bc3be9595c06fddaa0da952388b3158d';
const API_URL = 'https://api.themoviedb.org/3';

//Popular Movies

export const getPopularMovies = async () => {
  const resp = await axios.get(`${API_URL}/movie/popular?${API_KEY}`);
  return resp.data.results;
};

//upcoming Movies

export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${API_URL}/movie/upcoming?${API_KEY}`);
  return resp.data.results;
};

//Popular TV series

export const getTopRated = async () => {
  const resp = await axios.get(`${API_URL}/movie/top_rated?${API_KEY}`);
  return resp.data.results;
};
export const getAnimation = async () => {
  const resp = await axios.get(
    `${API_URL}/discover/movie?${API_KEY}&with_genres=16`,
  );
  return resp.data.results;
};
export const getDocumentary = async () => {
  const resp = await axios.get(
    `${API_URL}/discover/movie?${API_KEY}&with_genres=99`,
  );
  return resp.data.results;
};

// details
export const getMovie = async id => {
  const resp = await axios.get(`${API_URL}/movie/${id}?${API_KEY}`);
  return resp.data;
};
