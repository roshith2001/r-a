import React, { useState } from 'react';
import './App.css';

const Polaroid = ({ image, text }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`polaroid${isActive ? ' active' : ''}`}
      onClick={handleClick}
    >
      <img src={image} alt="Polaroid" />
      <div className="back">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Polaroid;
