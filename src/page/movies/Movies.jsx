import React, { useEffect, useState } from 'react';
import { useSearchParams, Outlet, useLocation } from 'react-router-dom';
import { searchMovies } from '../../api/api';
import Search from '../../components/search/Search';
import Box from '../../components/Box';
import { Item, ListItem } from './Movies.styled';

const Movies = () => {
  //state search movies
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (queryParams) {
      searchMovies(queryParams)
        .then(results => setMovies(results));
    }
  }, [queryParams]);

  const filterMovies = (value) => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(queryParams.toLowerCase()));


  return (
    <Box as='section' pl={20}>
      <Search onFilterMovies={filterMovies} />
      <ul>
        {visibleMovies.map(({ title, id }) => <ListItem key={id}><Item to={`/movies/${id}`} state={{from: location}}>{title}</Item></ListItem>)}
      </ul>
      <Outlet />
    </Box>
  );
};

export default Movies;
