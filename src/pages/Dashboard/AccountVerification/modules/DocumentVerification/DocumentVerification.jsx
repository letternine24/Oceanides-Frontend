import React from "react";
import "./DocumentVerification.css";

const DocumentVerification = () => {
  return (
    <div className="verification-container">
      <div className="verification-header">
        <h1>Document Verification</h1>
        <p>Your document information required for identification</p>
      </div>
      <div className="verification-content">
        <p>
          Please complete the process below to verify your proof of identity.
        </p>
        <p>
          As part of our verification process, first you will need to take a
          photo of your identity document and a photo of your face (selfie).
        </p>
        <button className="start-verification-btn">Start Verification</button>
      </div>
    </div>
  );
};

export default DocumentVerification;
