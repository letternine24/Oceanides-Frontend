import React from "react";
import "./ProfileDetails.css";

const ProfileDetails: React.FC = () => {
  return (
    <>
      <div className="profile-details">
        <div className="profile-details-info">
          <div className="profile-icon"></div>
          <div className="profile-details-info-items">
            <h6>Lau</h6>
            <p>corsafutures@gmail.com</p>
            <p>Verified</p>
          </div>
        </div>
        <div className="vertical-separator"></div>
        <div className="profile-details-id">
          <p>ID: 36358601 | 3970752</p>
          <p>Broker: Spotware</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ProfileDetails;
