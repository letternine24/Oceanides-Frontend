import React from "react";
import "./AccountVerification.css";
import PersonalDetails from "./modules/PersonalDetails/PersonalDetails";
import Address from "./modules/Address/Address";

const AccountVerification = () => {
  return (
    <main className="account-verification-content">
      <div className="content">
        <h1>Account Verification</h1>
        <p>
          To comply with regulation, each participant will have to go through
          indentity verification to prevent fraud causes.
        </p>

        <div className="account-verification-form">
          <PersonalDetails />
          <Address />
        </div>
      </div>
    </main>
  );
};

export default AccountVerification;
