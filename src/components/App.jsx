import React, { Component } from 'react';
import { ContainerApp } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = name => {
    // console  .log(name);
    this.setState({ imageName: name });
  };

  render() {
    return (
      <ContainerApp>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer autoClose={2000} />
      </ContainerApp>
    );
  }
}
