import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage-page">
      <div className="homePage-container">
        <div className="homePage-content">
          <h2>Welcome to PetZone 🐶</h2>
          <p>
            PetZone is your go-to destination for managing and showcasing your beloved pets.
          </p>
          <p>
            Whether you're looking to add a new pet to your collection or browse through the existing ones, we've got you covered!
          </p>
          <div className="homePage-buttons">
            <Link to="/pets">
              <CustomButton>Explore Pets</CustomButton>
            </Link>
          </div>
        </div>
        <div className="homePage-image">
          <img src="https://images.pexels.com/photos/5264055/pexels-photo-5264055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="homepage" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
