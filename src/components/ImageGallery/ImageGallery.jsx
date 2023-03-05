import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { ImageGalleryList } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
  };

  handlePageChange = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.imageName !== this.props.imageName ||
      prevState.page !== this.state.page
    ) {
      console.log(`name:${this.state.images.hits}`);
      this.setState({ loading: true, image: [] });

      fetch(
        `https://pixabay.com/api/?key=32765009-e8a3776ebed1bf95519eebcf0&q=${this.props.imageName}&page=${this.state.page}&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('Not Found'));
        })
        .then(images =>
          this.setState({ images: [...this.state.images, ...images.hits] })
        )
        .catch(error => {
          console.log(error);
        })
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <>
        <ImageGalleryList>
          {this.state.images.length !== 0 && (
            <ImageGalleryItem images={this.state.images} />
          )}
        </ImageGalleryList>
        {this.state.loading && (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            wrapperClass="progress-bar-wrapper"
            borderColor="#fff"
            barColor="#3f51b5"
          />
        )}
        {this.state.images.length !== 0 && (
          <Button onChange={this.handlePageChange} />
        )}
      </>
    );
  }
}
