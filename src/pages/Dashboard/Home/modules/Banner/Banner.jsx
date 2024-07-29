import React from "react";
import "./Banner.css"; // External CSS file for styling

const Banner = ({ title, description, icon, showInputField, showImages }) => {
  return (
    <div className="banner">
      <div className={`banner-content ${icon ? "with-icon" : ""}`}>
        {icon && <img src={icon} alt="Icon" className="banner-icon" />}
        <div className="banner-text">
          <h2 className="banner-title">{title}</h2>
          <p className="banner-description">{description}</p>
          {showInputField && (
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter something..."
                className="banner-input"
              />
              <button className="icon-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13H8v-2h3v-3h2v3h3v2h-3v3h-2v-3z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      {showImages && (
        <div className="banner-images">
          <img src="image1.jpg" alt="Image 1" className="banner-image" />
          <img src="image2.jpg" alt="Image 2" className="banner-image" />
          <img src="image3.jpg" alt="Image 3" className="banner-image" />
        </div>
      )}
    </div>
  );
};

export default Banner;
