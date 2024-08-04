import React, { useState } from "react";
import "./AccountVerification.css";
import PersonalDetails from "./modules/PersonalDetails/PersonalDetails";
import Address from "./modules/Address/Address";
import StartVerification from "./modules/DocumentVerification/StartVerification";
import DocumentVerification from "./modules/DocumentVerification/DocumentVerification";
import IDTypeVerification from "./modules/DocumentVerification/IDTypeVerification";
import MyAccount from "../MyAccount/MyAccount";

const AccountVerification = () => {
  // State to track the current step in the verification process
  const [currentStep, setCurrentStep] = useState(0);
  const [verificationComplete, setVerificationComplete] = useState(true);

  // Define the steps in the verification process
  const steps = [
    <PersonalDetails nextStep={() => setCurrentStep(1)} />,
    <Address nextStep={() => setCurrentStep(2)} />,
    <DocumentVerification nextStep={() => setCurrentStep(3)} />,
    <StartVerification nextStep={() => setCurrentStep(4)} />,
    <IDTypeVerification setVerificationComplete={setVerificationComplete} />,
  ];

  return (
    <>
      {!verificationComplete ? (
        <main className="account-verification-content">
          <div className="content">
            <h1>Account Verification</h1>
            <p>
              To comply with regulation, each participant will have to go
              through identity verification to prevent fraud causes.
            </p>

            <div className="account-verification-form">
              {steps[currentStep]}
            </div>
          </div>
        </main>
      ) : (
        <main className="account-verification-content">
          <div className="content">
            <MyAccount />
          </div>
        </main>
      )}
    </>
  );
};

export default AccountVerification;
