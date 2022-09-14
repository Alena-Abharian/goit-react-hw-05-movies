import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId);
  }, [movieId]);

  async function getCast(movieId) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ad66edf283bb948b384e974542ed7aed`);
      console.log('cast', response.data.cast);
      setCast(response.data.cast);
    } catch (err) {
      console.error(err.message);
    }
    console.log('cast', cast);

    return (
      <>
        <p>Cast</p>
        <ul>
          {cast.map(({ name, id, character, profile_path }) => <li key={id}>
            <img src={profile_path} alt={name} />
            <h4>{name}</h4>
            <p>{character}</p>
          </li>)}
        </ul>
      </>
    );
  }
};
export default Cast;
