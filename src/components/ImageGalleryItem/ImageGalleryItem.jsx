import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import { ImageItem, ImageGalleryLiImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    return (
      <>
        {this.props.images.map(image => {
          return (
            <>
              <ImageItem key={image.webformatURL}>
                <ImageGalleryLiImage
                  src={image.webformatURL}
                  alt={image.tags}
                  onClick={this.toogleModal}
                />
              </ImageItem>
              {this.state.showModal && (
                <Modal onClose={this.toogleModal}>{image.webformatURL}</Modal>
              )}
            </>
          );
        })}
      </>
    );
  }
}
