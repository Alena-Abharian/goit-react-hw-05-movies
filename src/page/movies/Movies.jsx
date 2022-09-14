import React, { useEffect, useState } from 'react';
import Search from '../../components/search/Search';
import { useSearchParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
// import { searchMovies } from '../../api/api';

const Movies = () => {
  //state search movies
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    searchMovies(queryParams);
    // .then(results => setMovies(results))
  }, [queryParams]);

  async function searchMovies(queryParams) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ad66edf283bb948b384e974542ed7aed&query=${queryParams}`);
      setMovies(response.data.results);
    } catch (err) {
      console.error(err.message);
    }
  }

  const filterMovies = (value) => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(queryParams.toLowerCase()));

  return (
    <>
      <Search onFilterMovies={filterMovies} />
      <ul>
        {visibleMovies.map(({ title, id }) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>)}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies;
