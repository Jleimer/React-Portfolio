import React, { useState } from 'react';
import Modal from './modal';

const Portfolio = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }
  const [photos] = useState([
    {
      name: 'Run Buddy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    
  ]);

  const currentPhotos = photos.filter((photo) => photo);
  

  return (
    <div>
        {isModalOpen && (
  <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
)}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;