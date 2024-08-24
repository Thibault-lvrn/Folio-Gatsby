import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import HighlightText from '../components/HighlightText';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const App = ({ title, categorie, technologies, content, images, isOpen, onRequestClose }) => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    Modal.setAppElement("#___gatsby");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1160 && isOpen) {
        onRequestClose();
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, onRequestClose]);

  const afterOpenModal = () => {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = "#f00";
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
        <div className="modalContent">
          <button className="closeButton" onClick={onRequestClose}>×</button>
          <div className="modal_information">
            <div className="modal_img">
              <img src={images[0].src} alt={images[0].alt} />
            </div>
            <div className="modal_title">
              <p>{title}</p>
              <div className="comp-container">
                {technologies.map((tech, index) => (
                  <div className="comp-img" key={index}>
                      <img
                        key={tech}
                        src={`./images/comp/svg/${tech}.svg`}
                        alt={tech}
                        className="tech_image"
                      />
                  </div>
                ))}
              </div>
            </div>
            <div className="modal_text">
              {/* {console.log('content', content)} */}
              <HighlightText content={content} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
