import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Search,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';

import SearchIcon from '@mui/icons-material/Search';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleNameChange = event => {
    this.setState({
      query: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      alert('Alert');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Search>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <ButtonLabel>
              <SearchIcon />
              Search
            </ButtonLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </Search>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
