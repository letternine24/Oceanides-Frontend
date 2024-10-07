import React from "react";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";
import "./Greetings.css";

const Greetings: React.FC = () => {
  const { userInfo } = useUserInfoStore();

  return (
    <>
      <div className="greetings">
        <div className="left-column">
          <div className="welcome-text">Welcome, {userInfo?.fullName}</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Greetings;
