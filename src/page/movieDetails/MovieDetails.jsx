import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams} from 'react-router-dom';
import { getMovie } from '../../api/api';
import Box from '../../components/Box';
import { Button, Text, H1, Title, Nav, Item, Ul } from './MovieDetails.styled';
import { BiArrowBack } from 'react-icons/bi';

const MovieDetails = () => {
  //state details movies
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovie(movieId)
      .then(data => setMovies(data));
  }, [movieId]);

  if (!movies) {
    return null;
  }

  return (
    <Box as='section' p={20}>
      <Box display='flex'>
        <Box display='flex' flexDirection='column' alignItems='flex-start'>
          <Button to={backLinkHref}> <BiArrowBack /></Button>
          <img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt={movies.title} width={250} />
        </Box>
        <Box display='flex' flexDirection='column' alignItems='flex-start' pl={20} pt={30} width={600}>
          <H1>{movies.title}</H1>
          <Text>User score: {movies.vote_average}</Text>
          <Title>Overview</Title>
          <Text>{movies.overview}</Text>
          <Title>Genres</Title>
          <Text>{movies.genres.map(({ name, id }) => (<span key={id}>{name}</span>))}</Text>
        </Box>
      </Box>
      <Box>
        <p>Additional information</p>
        <Ul>
          <Nav> <Item to='cast'>&#9672; Cast</Item></Nav>
          <Nav> <Item to='reviews'>&#9672; Reviews</Item></Nav>
        </Ul>
      </Box>
      <Outlet />
    </Box>
  );
};

export default MovieDetails;
