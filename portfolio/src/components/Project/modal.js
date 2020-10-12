import React from 'react';

function Modal({onClose, currentPhoto}) {
    const {name, website, gitHub, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/Modal-images/${index}.png`)}  />
        <a className= "flex-row px-1" href= {website}>{website}</a>
        <a className= "flex-row px-1" href= {gitHub}>{gitHub}</a>
        <button onClick={onClose} type="button">Close this modal</button>
        </div>
      </div>
    );
  }
  
  export default Modal;