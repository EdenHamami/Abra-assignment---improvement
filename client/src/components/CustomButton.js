// src/components/CustomButton.js
import React from 'react';
import './CustomButton.css';

function CustomButton({ children, onClick, type = 'button' }) {
  return (
    <button className="customButton" onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default CustomButton;
