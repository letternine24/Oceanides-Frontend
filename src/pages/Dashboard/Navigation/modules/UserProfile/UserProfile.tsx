import React from "react";
import "./UserProfile.css";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";

const UserProfile: React.FC = () => {
  const { userInfo } = useUserInfoStore();

  return (
    <div className="user-profile">
      <div className="user-profile-header">
        <span className="user-icon"></span>
        <div className="user-info">
          <h2>{userInfo?.fullName}</h2>
          <p className="status">
            {userInfo?.verified ? "Verified" : "Not Verified"}
          </p>
        </div>
      </div>
      {/* @TODO ID and Broker? */}
      <div className="user-details">
        <p>ID: 36358601 | 3970752</p>
        <p>Broker: Spotware</p>
      </div>
    </div>
  );
};

export default UserProfile;
