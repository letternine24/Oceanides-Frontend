import React from "react";
import "@styles/Components/Images.css";

const Images = ({ name, additionalClass, style }) => {
  return (
    <img
      src={`/assets/images/${name}.png`}
      className={`images ${additionalClass ?? ""}`}
      style={style}
    />
  );
};

export default Images;
