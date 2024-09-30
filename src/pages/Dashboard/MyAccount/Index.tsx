import React from "react";
import MyAccount from "./MyAccount/MyAccount";
import AccountVerification from "./AccountVerification/AccountVerification";
import Disclaimer from "../shared/Disclaimer/Disclaimer";
import { useUserDataStore } from "@/store/user/useUserDataStore";

const Index: React.FC = () => {
  const { userData } = useUserDataStore();

  return (
    <>
      {userData?.kycStatus != 1 ? <AccountVerification /> : <MyAccount />}
      <Disclaimer />
    </>
  );
};

export default Index;
