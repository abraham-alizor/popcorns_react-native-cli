import axios from 'axios';

//Constants
const API_KEY = 'api_key=bc3be9595c06fddaa0da952388b3158d';
const API_URL = 'https://api.themoviedb.org/3';

//Popular Movies

export const getPopularMovies = async () => {
  const resp = await axios.get(
    `${API_URL}/movie/popular?${API_KEY}&language=en-US&page=1`,
  );
  return resp.data.results;
};

//upcoming Movies

export const getUpcomingMovies = async () => {
  const resp = await axios.get(
    `${API_URL}/movie/upcoming?${API_KEY}&language=en-US&page=1`,
  );
  return resp.data.results;
};

//Popular TV series

export const getPopularTv = async () => {
  const resp = await axios.get(
    `${API_URL}/tv/popular?${API_KEY}&language=en-US&page=1`,
  );
  return resp.data.results;
};
export const getAnimation = async () => {
  const resp = await axios.get(
    `${API_URL}/discover/movie?${API_KEY}&language=en-US&page=1&with_genres=16`,
  );
  return resp.data.results;
};
export const getDocumentary = async () => {
  const resp = await axios.get(
    `${API_URL}/discover/tv?${API_KEY}&language=en-US&page=1&with_genres=99`,
  );
  return resp.data.results;
};
