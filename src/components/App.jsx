import { Routes, Route } from 'react-router-dom';
import Home from '../page/home/Home';
import Movies from '../page/movies/Movies';
import MovieDetails from '../page/movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import Box from './Box';
import { NavItem } from './App.styled';

export const App = () => {
  return (
    <>
      <Box as='header' width='100%' p={20}>
        <Box as='nav'>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/movies'>Movies</NavItem>
        </Box>
      </Box>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
