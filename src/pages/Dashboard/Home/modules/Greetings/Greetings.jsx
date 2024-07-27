import React from "react";
import "./Greetings.css";

const Greetings = () => {
  return (
    <>
      <div className="greetings">
        <div className="left-column">
          <div className="user-icon"></div>
          <div className="welcome-text">Welcome, Lau</div>
        </div>
        <div className="right-column">
          <div className="balance">
            Balance <button className="action-button">Deposit</button>
          </div>
          <div className="amount">
            $ 0.00 <button className="action-button">Withdraw</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Greetings;
