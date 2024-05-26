import React from 'react';
import "./Input.css"
function Input({ label, name, value, onChange, type = 'text', ...rest }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default Input;
