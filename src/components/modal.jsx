import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const App = ({ title, categorie, technologies, images, isOpen, onRequestClose }) => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    Modal.setAppElement('#___gatsby');
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1160 && isOpen) {
        onRequestClose();
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onRequestClose]);

  const afterOpenModal = () => {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = '#f00';
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modalContent'>
          <h2 ref={subtitleRef}>Hello</h2>
          <button className='closeButton' onClick={onRequestClose}>X</button>
          <div>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Categorie:</strong> {categorie}</p>
            <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
            <p><strong>Image:</strong> <img src={images[0].src} alt={images[0].alt} /></p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
