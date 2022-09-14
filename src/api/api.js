import axios from 'axios';

const BASIC_URL = 'https://api.themoviedb.org/';
const PERSONAL_KEY = 'ad66edf283bb948b384e974542ed7aed';

//page Home
export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(`${BASIC_URL}3/trending/movie/day?api_key=${PERSONAL_KEY}`);
    return response.data.results;
  } catch (err) {
    console.error(err.message);
  }
}

//page MovieDetails
export async function getMovie(movieId) {
  try {
    const response = await axios.get(`${BASIC_URL}3/movie/${movieId}?api_key=${PERSONAL_KEY}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
}

//page Movies
export async function searchMovies(query) {
  try {
    const response = await axios.get(`${BASIC_URL}3/search/movie?api_key=${PERSONAL_KEY}&query=${query}`);
    return response.data.results;
  } catch (err) {
    console.error(err.message);
  }
}

//page Cast
export async function getCast(movieId) {
  try {
    const response = await axios.get(`${BASIC_URL}3/movie/${movieId}/credits?api_key=${PERSONAL_KEY}`);
    return response.data.cast;
  } catch (err) {
    console.error(err.message);
  }
}

//page Reviews
export async function getReviews(movieId) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=ad66edf283bb948b384e974542ed7aed`);
    return response.data.results;
  } catch (err) {
    console.error(err.message);
  }
}
