import React from "react";
import "@styles/Components/Images.css";

const Images = ({ name, size }) => {
  return <img src={`/assets/images/${name}.png`} className={`images`} />;
};

export default Images;
