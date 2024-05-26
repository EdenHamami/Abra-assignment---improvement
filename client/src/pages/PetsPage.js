// src/pages/PetsPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPets } from '../api/PetsApi';
import PetList from '../components/PetList';
import CustomButton from '../components/CustomButton';
import './PetsPage.css';

function PetsPage() {
  const [pets, setPets] = useState(null);
  const [totalPets, setTotalPets] = useState(0);
  const [totalAge, setTotalAge] = useState(0);
  const navigate = useNavigate();

  const fetchPets = async () => {
    const response = await getPets();
    setPets(response.data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    if (pets) {
      setTotalPets(pets.length);
      setTotalAge(pets.reduce((sum, pet) => sum + pet.age, 0));
    }
  }, [pets]);

  if (!pets) {
    return (<div className="loading">Loading...</div>);
  }

  return (
    <div className="petsPage-container">
      <div className="petsPage-content">
        <div className="petsPage-header">
          <h2 className="petsPage-title">Pet List</h2>
          <div className="petsPage-stats">
            <div className="stats-item">
              <span className="stats-value">{totalPets}</span>
              <span className="stats-label">Total Pets</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">{totalAge}</span>
              <span className="stats-label">Total Age</span>
            </div>
          </div>
          <CustomButton onClick={() => navigate('/add')}>Add a Pet</CustomButton>
        </div>
        <div className="petsPage-list">
          <PetList pets={pets} />
        </div>
      </div>
      <div className="petsPage-image">
        <img src="https://images.pexels.com/photos/9812589/pexels-photo-9812589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pets" />
      </div>
    </div>
  );
}

export default PetsPage;
