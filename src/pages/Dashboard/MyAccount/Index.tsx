import React from "react";
import MyAccount from "./MyAccount/MyAccount";
import AccountVerification from "./AccountVerification/AccountVerification";
import Disclaimer from "../shared/Disclaimer/Disclaimer";
import { useUserDataStore } from "@/store/user/useUserDataStore";

const Index: React.FC = () => {
  const { userData } = useUserDataStore();
  const isUserVerified = userData?.kycStatus == 1;

  return (
    <>
      {isUserVerified ? <MyAccount /> : <AccountVerification />}
      <Disclaimer />
    </>
  );
};

export default Index;
