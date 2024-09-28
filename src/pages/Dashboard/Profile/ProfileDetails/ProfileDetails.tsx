import React from "react";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";
import "./ProfileDetails.css";

const ProfileDetails: React.FC = () => {
  const { userInfo } = useUserInfoStore();
  return (
    <>
      <div className="profile-details">
        <div className="profile-details-info">
          <div className="profile-icon"></div>
          <div className="profile-details-info-items">
            <h6>{userInfo?.fullName}</h6>
            <p>{userInfo?.email}</p>
            <p>{userInfo?.verified ? "Verified" : "Not Verified"}</p>
          </div>
        </div>
        <div className="vertical-separator"></div>

        {/*  @TODO */}
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
