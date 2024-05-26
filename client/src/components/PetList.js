// src/components/PetList.js
import React from 'react';
import PetCard from './PetCard';
import './PetList.css';

function PetList({ pets }) {
  return (
    <div className="petList">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default PetList;
