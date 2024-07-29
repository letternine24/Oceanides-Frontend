import React, { useState, useEffect } from 'react';
import '@styles/Components/TextBox.css';

function TextBox({ fieldName, labelName, fieldType, required, value, onChange, leftIcon }) {
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
    <div className='textbox-input-container'>
      <label htmlFor={labelName}>
        {required === "required" ? <span className="required-field">* </span> : ""}
        {labelName}:
      </label>
      <input
        type= {fieldType} 
        id={fieldName}
        name={fieldName}
        value={value !== undefined ? value : inputValue}
        onChange={handleInputChange}
      />
      
    </div>
  );
}

export default TextBox;