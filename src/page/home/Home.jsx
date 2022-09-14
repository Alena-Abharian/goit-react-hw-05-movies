import React, { useEffect, useState } from 'react';
import { Title } from './Home.styled';
import { fetchTrendingMovies } from '../../api/api';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import Loader from '../../components/loader/Loader';

const Home = () => {
  //state trending movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(results => setMovies(results));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {movies ? (
        <>
          <Box>
            <ul>{movies.map(({ title, id }) =>
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>)}
            </ul>
          </Box>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
