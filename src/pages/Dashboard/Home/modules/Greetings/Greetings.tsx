import React from "react";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";
import "./Greetings.css";

const Greetings: React.FC = () => {
  const { userInfo } = useUserInfoStore();

  return (
    <>
      <div className="greetings">
        <div className="left-column">
          <div className="profile-icon"></div>
          <div className="welcome-text">Welcome, {userInfo?.fullName}</div>
        </div>
        <div className="right-column">
          <div className="balance">
            Balance <button className="action-button">Deposit</button>
          </div>
          <div className="amount">
            {/* @TODO */}$ 0.00{" "}
            <button className="action-button">Withdraw</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Greetings;
