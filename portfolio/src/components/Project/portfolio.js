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
      website: 'https://jleimer.github.io/run-buddy/',
      gitHub: 'https://github.com/Jleimer/run-buddy'
    },
    {
      name: 'Music Quiz',
      website: 'https://jleimer.github.io/Code-Quiz/',
      gitHub: 'https://github.com/Jleimer/Code-Quiz'
    },
    {
      name: 'Note Taker',
      website: 'https://intense-eyrie-65556.herokuapp.com/',
      gitHub: 'https://github.com/Jleimer/Note-Taker'
    },
    {
      name: 'Tech Blog',
      website: 'https://safe-eyrie-56630.herokuapp.com/',
      gitHub: 'https://github.com/Jleimer/The-Tech-Blog'  
    },
    {
      name: 'Prestige Worldwide',
      website: 'https://jdlawton.github.io/prestige-worldwide/',
      gitHub: 'https://github.com/jdlawton/prestige-worldwide' 
    },
    {
      name: 'Volunteer Hub',
      website: 'https://volunteer-hub.herokuapp.com/',
      gitHub: 'https://github.com/johnmckech/volunteer-hub'
    }
    
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
            src={require(`../../assets/thumbnail/${i}.png`)}
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