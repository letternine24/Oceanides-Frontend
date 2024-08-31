import React from "react";
import "./AccountVerification.css";
import PersonalDetails from "./PersonalDetails";
import VerificationProcess from "./VerificationProcess";

interface AccountVerificationProps {
  setVerificationComplete: (complete: boolean) => void;
}

const AccountVerification: React.FC<AccountVerificationProps> = ({
  setVerificationComplete,
}) => {
  const handleSubmit = (personalData?: any, verificationData?: any) => {
    // Combine data from both components and log it
    const combinedData = { ...personalData, ...verificationData };
    console.log("Combined form data:", combinedData);
    setVerificationComplete(true);
    // Here you would typically send `combinedData` to your API or backend service
  };

  return (
    <>
      <h1>Account Verification</h1>
      <p>
        To comply with regulation, each participant will have to go through
        identity verification to prevent fraud causes.
      </p>

      <div className="verification-container">
        <div className="form-layout">
          <PersonalDetails onSubmit={(data: any) => handleSubmit(data)} />
          <VerificationProcess
            onSubmit={(data: any) => handleSubmit(undefined, data)}
          />
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
    </>
  );
};

export default AccountVerification;
