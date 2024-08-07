import React, { useState } from "react";
import "./AccountVerification.css";
import PersonalDetails from "./modules/PersonalDetails/PersonalDetails";
import VerificationProcess from "./modules/VerificationProcess/VerificationProcess";

const AccountVerification = ({ setVerificationComplete }) => {
  const handleSubmit = (personalData, verificationData) => {
    // Combine data from both components and log it
    const combinedData = { ...personalData, ...verificationData };
    console.log("Combined form data:", combinedData);
    setVerificationComplete(true);
    // Here you would typically send `combinedData` to your API or backend service
  };

  return (
    <main className="verification-main-content container">
      <h1>Account Verification</h1>
      <p>
        To comply with regulation, each participant will have to go through
        identity verification to prevent fraud causes.
      </p>

      <div className="verification-container">
        <div className="form-layout">
          <PersonalDetails onSubmit={(data) => handleSubmit(data)} />
          <VerificationProcess onSubmit={(data) => handleSubmit(data)} />
        </div>
        <div className="button-row">
          <button
            type="button"
            className="submit-button"
            onClick={() => handleSubmit()}
          >
            Submit All
          </button>
        </div>
      </div>
    </main>
  );
};

export default AccountVerification;
