import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyle } from './Modal.styled';

// const Modal = ({ selectedImage, onCloseModal }) => (
// <Overlay onClick={onCloseModal}>
//   <ModalStyle>
//     <img src={selectedImage.largeImageURL} alt="" />
//   </ModalStyle>
// </Overlay>
// );

// export default Modal;
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onClickBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.onClickBackdrop}>
        <ModalStyle>
          <img src={this.props.selectedImage.largeImageURL} alt="" />
        </ModalStyle>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
