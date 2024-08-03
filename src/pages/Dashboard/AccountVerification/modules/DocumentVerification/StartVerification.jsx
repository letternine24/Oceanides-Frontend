import React from "react";
import "./StartVerification.css";

const StartVerification = () => {
  return (
    <div className="verification-box">
      <div className="logo-header">
        <img
          src="/path_to_logo/corsa-futures-logo.png"
          alt="Corsa Futures"
          className="logo"
        />
      </div>
      <h1 className="verification-title">Start Verification</h1>
      <p className="verification-text">
        This process is designed to verify your identity and protect you from
        identity theft.
      </p>
      <p className="verification-text">
        Please have your ID ready and click 'Start'
      </p>
      <button className="start-button">Start</button>
      <p className="consent-text">
        By clicking “Start”, I consent to processing, and sharing my personal
        information, which may include biometric data, as set out in its Privacy
        Notice.
      </p>
    </div>
  );
};

export default StartVerification;
