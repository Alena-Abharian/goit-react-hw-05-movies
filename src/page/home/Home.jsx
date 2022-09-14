import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api/api';
import Box from '../../components/Box';
import { Item, Title, ListItem } from './Home.styled';
import Loader from '../../components/loader/Loader';

const Home = () => {
  //state trending movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(results => setMovies(results));
  }, []);

  return (
    <Box as='section' pl={20}>
      <Title>Trending today</Title>
      {movies ? (
        <>
          <Box>
            <ul>{movies.map(({ title, id }) =>
              <ListItem key={id}>
                <Item to={`/movies/${id}`}>{title}</Item>
              </ListItem>)}
            </ul>
          </Box>
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Home;
