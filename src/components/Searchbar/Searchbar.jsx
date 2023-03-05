import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { MdImageSearch } from 'react-icons/md';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleChange = event => {
    this.setState({ imageName: event.target.value.toLowerCase() });
  };

  hadleSubit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      return toast.warn('Enter a name for the image');
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.hadleSubit}>
          <SearchFormButton type="submit">
            <MdImageSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.imageName}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
