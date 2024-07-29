import React, { useState, useEffect } from 'react';
import '@styles/Components/TextBox.css';

function TextBox({ fieldName, value, onChange }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Set inputValue state based on the initial value prop
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const handleInputChange = (event) => {
    const {value} = event.target;
    // Update local state
    setInputValue(value);
    // Notify parent component of value change (if controlled)
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className='input-container'>
      <label htmlFor={fieldName}>{fieldName}:</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={value !== undefined ? value : inputValue}
        onChange={handleInputChange} 
      />
    </div>
  );
}

export default TextBox;