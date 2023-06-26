import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Search,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('Alert');
      return;
    }

    onSubmit(query);
    // query('');
  };

  return (
    <Search>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleNameChange}
        />
      </SearchForm>
    </Search>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
