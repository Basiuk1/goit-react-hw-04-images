import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    showModal: false,
    selectedImage: null,
    searchQuery: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const API_KEY = '35817909-7eb30b2bd2710e4d1f9e56635';
    const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`;

    this.setState({ isLoading: true });

    fetch(BASE_URL)
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }))
      )
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleFormSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = image => {
    this.setState({ selectedImage: image, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null, showModal: false });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;
    const showButton =
      images.length > 0 && images.length % 12 === 0 && !isLoading;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onLoadMore={this.handleLoadMore} showButton={showButton} />
        )}
        {showModal && (
          <Modal
            selectedImage={selectedImage}
            onCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
