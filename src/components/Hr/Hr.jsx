import React from "react";
import "@styles/Components/Hr.css";

const Hr = ({ width, color }) => {
  return <div className="hr" style={{ width: width, borderColor: color }} />;
};

export default Hr;
