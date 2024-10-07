import React from "react";
import "./AppLoader.css";

const AppLoader: React.FC = () => {
  return (
    <>
      <div
        className="progress app-progress-bar"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 101 }}
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated app-progress-bar-inner"
          role="progressbar"
          style={{ width: "100%" }}
        ></div>
    </div>
      <div className="app-loading-overlay"></div>
    </>
  );
};

export default AppLoader;
