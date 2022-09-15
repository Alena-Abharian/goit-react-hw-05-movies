import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api/api';
import Box from '../../components/Box';
import { Item, Title, ListItem } from './Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  //state trending movies
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then(results => setMovies(results));
  }, []);

  return (
    <Box as='section' pl={20}>
      <Title>Trending today</Title>
      <Box>
        <ul>{movies.map(({ title, id }) =>
          <ListItem key={id}>
            <Item to={`/movies/${id}`} state={{ from: location }}>{title}</Item>
          </ListItem>)}
        </ul>
      </Box>
    </Box>
  );
};

export default Home;
