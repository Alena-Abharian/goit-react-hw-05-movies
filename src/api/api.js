import axios from 'axios';


export async function fetchTrendingMovies() {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=ad66edf283bb948b384e974542ed7aed');
    return response.data.results;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getMovie(movieId) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ad66edf283bb948b384e974542ed7aed`);
  return response.data;
  } catch (err) {
    console.error(err.message);
  }
}

// export async function searchMovies(query) {
//   try {
//     const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ad66edf283bb948b384e974542ed7aed&query=${query}`);
//     return response.data.results;
//   } catch (err) {
//     console.error(err.message);
//   }
// }
