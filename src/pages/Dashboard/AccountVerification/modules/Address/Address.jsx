import React, { useState } from "react";
import "./Address.css"; // Import CSS file for styles

const Address = () => {
  const [formData, setFormData] = useState({
    addressLine: "",
    city: "",
    state: "",
    nationality: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePrevClick = () => {
    // Logic for navigating to previous step
    console.log("Previous button clicked");
  };

  const handleNextClick = () => {
    // Logic for navigating to next step or submitting form
    console.log("Next button clicked");
  };

  return (
    <div className="address-form">
      <div className="form-box">
        <h2 className="title">Address Details</h2>

        <div className="form-row">
          <div className="form-column">
            <input
              type="text"
              name="addressLine"
              value={formData.addressLine}
              onChange={handleInputChange}
              placeholder="Address Line"
              className="input-field"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="input-field"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
              className="input-field"
            />
          </div>
          <div className="form-column">
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              placeholder="Nationality"
              className="input-field"
            />
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              placeholder="Postal Code"
              className="input-field"
            />
          </div>
        </div>

        <div className="button-row">
          <button className="button" onClick={handlePrevClick}>
            Prev
          </button>
          <button className="button" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
