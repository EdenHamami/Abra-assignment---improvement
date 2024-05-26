// src/components/Select.js
import React from 'react';
import './Select.css';

function Select({ label, name, value, onChange, options, ...rest }) {
  return (
    <div className="select-group">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange} {...rest}>
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
