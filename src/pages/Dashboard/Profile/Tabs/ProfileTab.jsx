// ProfileTab.js

import React from "react";
import "./ProfileTab.css"; // Import the CSS file for styling

const ProfileTab = () => {
  return (
    <div className="profile-tab">
      <h4>Personal Details</h4>
      <hr />
      <div className="details-row">
        <div className="details-column">
          <p>Full Name</p>
          <p>Lau</p>
        </div>
        <div className="details-column">
          <p>Date of Birth</p>
          <p>12-12-1990</p>
        </div>
      </div>
      <div className="details-row">
        <div className="details-column">
          <p>Country</p>
          <p>Malaysia</p>
        </div>
        <div className="details-column">
          <p>Address</p>
          <p>Sample Address</p>
        </div>
      </div>

      <br />

      <h4>Contact Information </h4>
      <hr />
      <div className="details-row">
        <div className="details-column">
          <p>Email</p>
          <p>samplemail@here</p>
        </div>
        <div className="details-column">
          <p></p>
          <p>Phone Number</p>
          <p>+123123123</p>
        </div>
      </div>
      <button className="edit-button">Edit</button>
    </div>
  );
};

export default ProfileTab;
