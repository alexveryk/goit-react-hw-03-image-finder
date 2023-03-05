import { ImageItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {console.log(images)}
      <ImageItem>
        <ImageGalleryItemImage src="" alt="" />
      </ImageItem>
    </>
  );
};
