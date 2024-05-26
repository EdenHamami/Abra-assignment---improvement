// src/TopBar.js
import React, { useState } from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="topBar">
 <Link to="/" className="logo">        
 PetZone 🐶
      </Link>
      <div className="menuToggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`navLinks ${menuOpen ? 'open' : ''}`}>
        <a href="/add">Add a Pet</a>
        <a href="/pets">Pets List</a>
      </div>
    </div>
  );
};

export default TopBar;
