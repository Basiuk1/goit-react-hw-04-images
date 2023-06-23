import React from 'react';
import PropTypes from 'prop-types';

import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onImageClick }) => (
  <GalleryItem onClick={() => onImageClick(image)}>
    <GalleryImg src={image.webformatURL} alt="" />
  </GalleryItem>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
