import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
const ImageGallery = ({ images, onImageClick }) => (
  <GalleryList>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onImageClick={onImageClick}
      />
    ))}
  </GalleryList>
);

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
