import React, { useState } from "react";
import "./PersonalDetails.css"; // Import CSS file for styles

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: "",
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
    <div className="personal-details">
      <div className="form-box">
        <h2 className="title">Personal Details</h2>
        <p className="subtitle">
          Your simple personal information required for identification Please
          type carefully and fill out the form with your personal details. Your
          can’t edit these details once you submitted the form.
        </p>

        <div className="form-row">
          <div className="form-column">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="input-field"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="input-field"
            />
          </div>
          <div className="form-column">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="input-field"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="input-field"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              placeholder="Date of Birth"
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

export default PersonalDetails;
