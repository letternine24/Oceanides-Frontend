import React from "react";
import "./DocumentVerification.css";

const DocumentVerification = ({ nextStep }) => {
  // Function to handle the start of verification, moving to the next step
  const handleStartVerification = () => {
    console.log("Verification process started");
    nextStep(); // Proceed to the next step
  };

  return (
    <div className="verification-container">
      <div className="verification-header">
        <h1>Document Verification</h1>
        <p>Your document information is required for identification.</p>
      </div>
      <div className="verification-content">
        <p>
          Please complete the process below to verify your proof of identity.
        </p>
        <p>
          As part of our verification process, you will need to take a photo of
          your identity document and a photo of your face (selfie).
        </p>
        <div className="button-row">
          <button
            className="start-verification-btn"
            onClick={handleStartVerification}
          >
            Start Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentVerification;
