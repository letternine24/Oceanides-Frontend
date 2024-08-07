import React, { useState } from "react";
import MyAccount from "./MyAccount/MyAccount";
import AccountVerification from "./AccountVerification/AccountVerification";

const Index = () => {
  const [verificationComplete, setVerificationComplete] = useState(true);

  return (
    <>
      <div className="container">
        {!verificationComplete ? (
          <AccountVerification
            setVerificationComplete={setVerificationComplete}
          />
        ) : (
          <MyAccount />
        )}
      </div>
    </>
  );
};

export default Index;
