import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './loader/Loader';
import Box from './Box';
import { NavItem } from './App.styled';
import GlobalStyle from '../GlobalStyle';

const Home = lazy(() => import('../page/home/Home'));
const Movies = lazy(() => import('../page/movies/Movies'));
const MovieDetails = lazy(() => import('../page/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const NotFoundPage = lazy(() => import('../page/notFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Box as='header' width='100%' p={20}>
        <Box as='nav'>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/movies'>Movies</NavItem>
        </Box>
      </Box>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
