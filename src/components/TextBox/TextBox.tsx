import React, { useState, useEffect, ChangeEvent } from "react";
import "@styles/Components/TextBox.css";
import { ITextBox } from "@/interface/components/TextBox";

const TextBox: React.FC<ITextBox> = ({
  fieldName,
  labelName,
  fieldType,
  required = "optional",
  value,
  onChange,
  leftIcon,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="textbox-input-container">
      <label htmlFor={fieldName}>
        {required === "required" && <span className="required-field">* </span>}
        {labelName}:
      </label>
      {leftIcon && <span className="left-icon">{leftIcon}</span>}
      <input
        type={fieldType}
        id={fieldName}
        name={fieldName}
        value={value !== undefined ? value : inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextBox;
