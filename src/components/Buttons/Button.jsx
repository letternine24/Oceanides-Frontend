import React from "react";
import "./Button.css";

const Button = ({ label, onClick, className, style, disabled }) => {
  return (
    <button
      className={`button ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
