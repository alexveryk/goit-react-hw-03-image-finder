import { ImageItem, ImageGalleryLiImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(image => {
        return (
          <ImageItem key={image.id}>
            <ImageGalleryLiImage src={image.webformatURL} alt={image.id} />
          </ImageItem>
        );
      })}

      {/* <ImageItem>
        <ImageGalleryLiImage src="" alt="" />
      </ImageItem> */}
    </>
  );
};
