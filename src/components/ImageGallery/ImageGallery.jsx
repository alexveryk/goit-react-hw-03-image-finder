import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageName } = this.props;
    const { page } = this.state;

    if (prevProps.imageName !== imageName) {
      this.resetState(prevProps.imageName !== imageName);
    }

    if (prevProps.imageName !== imageName || prevState.page !== page) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?key=32765009-e8a3776ebed1bf95519eebcf0&q=${imageName}&page=${page}&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            console.log('pislia', response);
            return response.json();
          }
          return Promise.reject(new Error('Not Found'));
        })
        .then(images => {
          return this.setState({
            images: [...this.state.images, ...images.hits],
            totalHits: images.totalHits,
          });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(this.setState({ loading: false }));
    }
  }

  handlePageChange = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  resetState(name) {
    if (name) {
      this.setState({
        images: [],
        page: 1,
      });
    }
  }

  render() {
    const { images, totalHits, loading } = this.state;
    return (
      <>
        {images.length !== 0 && (
          <ImageGalleryList>
            <ImageGalleryItem images={images} />
          </ImageGalleryList>
        )}

        {loading && (
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

        {images.length < totalHits && (
          <Button onChange={this.handlePageChange} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};
