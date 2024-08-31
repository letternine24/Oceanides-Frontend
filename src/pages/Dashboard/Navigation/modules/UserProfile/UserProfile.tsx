import React from "react";
import "./UserProfile.css";

const UserProfile: React.FC = () => {
  return (
    <div className="user-profile">
      <div className="user-profile-header">
        <span className="user-icon"></span>
        <div className="user-info">
          <h2>Lau</h2>
          <p className="status">Not Verified</p>
        </div>
      </div>
      <div className="user-details">
        <p>ID: 36358601 | 3970752</p>
        <p>Broker: Spotware</p>
      </div>
    </div>
  );
};

export default UserProfile;
