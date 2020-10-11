import React from 'react';

function Modal({onClose, currentPhoto}) {
    const {name, description, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/images/${index}.png`)}  />
        <p>{description}</p>
        <button onClick={onClose} type="button">Close this modal</button>
        </div>
      </div>
    );
  }
  
  export default Modal;