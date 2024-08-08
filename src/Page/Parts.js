import React from 'react';
import './Parts.css'; // Make sure to create and style this CSS file

function AccesoriesHomepage() {
  const images = [
    { src: 'assets/chrome Silencer GT.jpg', title: 'Exhaust' },
    { src: 'assets/Mirror bar.jpg', title: 'Mirror Bar' },
    { src: 'assets/Petroltank.jpeg', title: 'Petrol Tank' },
    { src: 'assets/Chain lube.jpg', title: 'Chain Lube' },
    { src: 'assets/Chain sproket.jpg', title: 'Chain Sproket' },
    { src: 'assets/Head light.jpg', title: 'Head Light' },
    { src: 'assets/Engine.jpg', title: 'Engine Spares' },
    { src: 'assets/Brake.jpg', title: 'Brake' },
    { src: 'assets/seat.jpg', title: 'Seat' },
  ];

  const handleCardClick = (title) => {
    console.log(`Clicked on ${title}`);
    // Add your desired functionality here, e.g., navigate to a detailed page
  };

  return (
    <div className="card-grid">
      {images.map((image, index) => (
        <div
          className="card"
          key={index}
          onClick={() => handleCardClick(image.title)}
        >
          <img src={image.src} alt={image.title} />
          <div className="card-title">{image.title}</div>
        </div>
      ))}
    </div>
  );
}

export default AccesoriesHomepage;
