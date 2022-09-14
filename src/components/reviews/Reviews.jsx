import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api/api';
import Box from '../../components/Box';
import { Item, List, Text, Title } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(data => setReviews(data));
  }, [movieId]);

  return (
    <Box as='section' pl={270} pr={20}>
      <List>
        {reviews.map(({ author, content, id }) =>
          <Item key={id}>
            <Title>{author}</Title>
            <Text>{content}</Text>
          </Item>
        )}
      </List>
    </Box>
  );
};

export default Reviews;
