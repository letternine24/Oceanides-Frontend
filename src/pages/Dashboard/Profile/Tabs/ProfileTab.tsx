import React from "react";
import "./ProfileTab.css"; // Import the CSS file for styling
import { useUserInfoStore } from "@/store/user/useUserInfoStore";

const ProfileTab: React.FC = () => {
  const { userInfo } = useUserInfoStore();
  return (
    <div className="profile-tab">
      <h4>Personal Details</h4>
      <hr />
      <div className="details-row">
        <div className="details-column">
          <p>Full Name</p>
          <p>{userInfo?.fullName}</p>
        </div>
        <div className="details-column">
          <p>Date of Birth</p>
          <p>{userInfo?.dateOfBirth}</p>
        </div>
      </div>
      <div className="details-row">
        <div className="details-column">
          <p>Country</p>
          <p>{userInfo?.countryCode}</p>
        </div>
        <div className="details-column">
          <p>Address</p>
          <p>-</p>
        </div>
      </div>

      <br />

      <h4>Contact Information</h4>
      <hr />
      <div className="details-row">
        <div className="details-column">
          <p>Email</p>
          <p>{userInfo?.email}</p>
        </div>
        <div className="details-column">
          <p>Phone Number</p>
          <p>{userInfo?.contactNumber}</p>
        </div>
      </div>
      <button className="edit-button">Edit</button>
    </div>
  );
};

export default ProfileTab;
