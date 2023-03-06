import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import { ImageItem, ImageGalleryLiImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    originalImage: '',
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = evt => {
    this.toogleModal();
    const galleryImg = evt.target.nodeName;
    const originalImage = evt.target.dataset.source;

    if (galleryImg !== 'IMG') {
      return;
    }
    this.setState({
      originalImage,
    });
    console.log(originalImage);
    return originalImage;
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
                  onClick={this.openModal}
                  data-source={image.largeImageURL}
                />
              </ImageItem>
            </>
          );
        })}
        {this.state.showModal && (
          <Modal onClose={this.toogleModal} url={this.state.originalImage} />
        )}
      </>
    );
  }
}
