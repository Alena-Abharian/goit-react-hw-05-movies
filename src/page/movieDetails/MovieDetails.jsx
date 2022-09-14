import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams, Link } from 'react-router-dom';
import { getMovie } from '../../api/api';
import Loader from '../../components/loader/Loader';
import { Button } from './MovieDetails.styled';
import { BiArrowBack } from "react-icons/bi";

const MovieDetails = () => {
  //state details movies
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId)
      .then(data => setMovies(data));
  }, [movieId]);

  if (!movies) {
    return null;
  }

  return (
    <>
      {movies ? (<>
        <Button to='/'> <BiArrowBack/> go back</Button>
        <img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt={movies.title} width={100} />
        <h1>{movies.title}</h1>
        <p>User score: {movies.vote_average}</p>
        <h2>Overview</h2>
        <p>{movies.overview}</p>
        <h3>Genres</h3>
        <p>{movies.genres.map(({ name, id }) => (<span key={id}>{name}</span>))}</p>
        <p>Additional information</p>
        <NavLink to='cast'>Cast</NavLink>
        <NavLink to='reviews'>Reviews</NavLink>
        <Outlet />
      </>) : (
        <Loader />
      )}
    </>
  );
};

export default MovieDetails;
