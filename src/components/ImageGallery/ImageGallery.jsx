import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ImageGalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      console.log(prevProps.imageName !== this.props.imageName);
      console.log('prevProps: ', prevProps.imageName);
      console.log('Curent Props', this.props.imageName);
      fetch(
        `https://pixabay.com/api/?key=32765009-e8a3776ebed1bf95519eebcf0&q=${this.props.imageName}`
      ).then(response => {
        response.json().then(images => this.setState({ images }));
      });
    } else {
      const warnMessage = toast.warn(
        'The request for this keyword has already been completed'
      );
      console.log('working worning');
      return warnMessage;
    }
  }

  render() {
    return (
      <ImageGalleryList>
        {/* <!-- Набір <li> із зображеннями --> */}
      </ImageGalleryList>
    );
  }
}
