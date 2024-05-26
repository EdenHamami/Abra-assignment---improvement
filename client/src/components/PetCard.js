import React, { useEffect, useState } from 'react';
import './PetCard.css';

function PetCard({ pet }) {
  const [isRecentlyAdded, setIsRecentlyAdded] = useState(false);

  useEffect(() => {
    const checkRecentlyAdded = () => {
      const now = new Date();
      const petCreatedAt = new Date(pet.createdAt);
      const diffInMinutes = (now - petCreatedAt) / 1000 / 60;
      setIsRecentlyAdded(diffInMinutes <= 10);
    };

    checkRecentlyAdded();

    const intervalId = setInterval(checkRecentlyAdded, 60000); 

    return () => clearInterval(intervalId); 
  }, [pet.createdAt]);

  return (
    <div className={`petCard ${isRecentlyAdded ? 'recently-added' : ''}`}>
      <div className="petCard-content">
        <h2 className="petCard-name">{pet.name}</h2>
        <p className="petCard-type"> {pet.petType}</p>
        <p className="petCard-age">Age: {pet.age}</p>
        <p className="petCard-color">
          <span>Color:</span>
          <span className="color-swatch" style={{ backgroundColor: pet.color }}></span>
        </p>
      </div>
    </div>
  );
}

export default PetCard;
