import React, { useState } from "react";
import MyAccount from "./MyAccount/MyAccount";
import AccountVerification from "./AccountVerification/AccountVerification";
import Disclaimer from "../shared/Disclaimer/Disclaimer";

const Index = () => {
  const [verificationComplete, setVerificationComplete] = useState(true);

  return (
    <>
      {!verificationComplete ? (
        <AccountVerification
          setVerificationComplete={setVerificationComplete}
        />
      ) : (
        <MyAccount />
      )}

      <Disclaimer />
    </>
  );
};

export default Index;
