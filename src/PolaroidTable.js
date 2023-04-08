import React, { useState, useEffect, useMemo } from 'react';
import Polaroid from './Polaroid';
import './App.css';
import polaroid1 from './images/polaroid1.jpeg';
import polaroid2 from './images/polaroid2.jpeg.jpg';
import polaroid3 from './images/polaroid3.jpeg.jpg';
import polaroid4 from './images/polaroid4.jpeg.jpg';
import polaroid5 from './images/polaroid5.jpeg.jpg';
import polaroid6 from './images/polaroid6.jpeg.jpg';

const PolaroidTable = () => {
  const [blur, setBlur] = useState(false);

  const polaroids = useMemo(() => [
    { image: polaroid1, text: 'Lorem ipsum dolor sit amet' },
    { image: polaroid2, text: 'Consectetur adipiscing elit' },
    { image: polaroid3, text: 'Sed do eiusmod tempor' },
    { image: polaroid4, text: 'Incididunt ut labore et dolore magna aliqua' },
    { image: polaroid5, text: 'Ut enim ad minim veniam' },
    { image: polaroid6, text: 'Quis nostrud exercitation ullamco laboris' },
  ], []);

  useEffect(() => {
    const activePolaroid = polaroids.find(polaroid => polaroid.active);
    setBlur(activePolaroid ? true : false);
  }, [polaroids]);

  return (
    <div className={`container ${blur ? 'blur' : ''}`}>
      {polaroids.map((polaroid, index) => (
        <Polaroid
          key={index}
          image={polaroid.image}
          text={polaroid.text}
        />
      ))}
      
    </div>
  );
};

export default PolaroidTable;