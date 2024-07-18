import React from "react";
import "@styles/Components/Icon.css";

const Icon = ({ name, size }) => {
  return (
    <img
      src={`/assets/icons/${name}.png`}
      className={`icon ${size ? `icon-${size}` : ""}`}
    />
  );
};

export default Icon;
