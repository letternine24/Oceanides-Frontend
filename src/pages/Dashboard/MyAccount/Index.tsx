import React from "react";
import MyAccount from "./MyAccount/MyAccount";
import AccountVerification from "./AccountVerification/AccountVerification";
import Disclaimer from "../shared/Disclaimer/Disclaimer";
import { useUserDataStore } from "@/store/user/useUserDataStore";
import { getKYCStatusText, KycStatus } from "@/enum/kycStatus";

const Index: React.FC = () => {
  const { userData } = useUserDataStore();
  const userKycStatus = userData?.kycStatus as KycStatus;

  const isUserApproved = userKycStatus === KycStatus.Approved;
  const isKycNotSubmitted = userKycStatus === KycStatus.NotSubmitted;
  const isKycPendingOrCancelled =
    userKycStatus === KycStatus.PendingApproval ||
    userKycStatus === KycStatus.CancelledByAdmin;

  return (
    <>
      {isUserApproved && <MyAccount />}

      {isKycNotSubmitted && <AccountVerification />}

      {isKycPendingOrCancelled && (
        <div>
          <h2>{getKYCStatusText(userKycStatus)}</h2>
        </div>
      )}

      <Disclaimer />
    </>
  );
};

export default Index;
