import React, { useState } from 'react';

const Search = ({ onFilterMovies }) => {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    onFilterMovies(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleQuery} />
        <button>Search</button>
      </form>
    </>
  );
};

export default Search;
