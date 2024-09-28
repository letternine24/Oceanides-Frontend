import React, { useState } from "react";
import "./AccountVerification.css";
import PersonalDetails from "./PersonalDetails";
import VerificationProcess from "./VerificationProcess";
import { IKycVerificationRequest } from "@/interface/user/IKycVerification";
import { useUserDataStore } from "@/store/user/useUserDataStore";

interface AccountVerificationProps {
  setVerificationComplete: (complete: boolean) => void;
}

const AccountVerification: React.FC<AccountVerificationProps> = ({
  setVerificationComplete,
}) => {
  const [personalData, setPersonalData] = useState<any>({});
  const [verificationData, setVerificationData] = useState<any>({});
  const { userData } = useUserDataStore();
  const handleSubmit = async () => {
    try {
      // @TODO
      // Combine data from both components
      const combinedData = { ...personalData, ...verificationData };

      // Convert files to base64 strings for the KYC request
      const frontKycBase64 = verificationData.frontFile
        ? await fileToBase64(verificationData.frontFile)
        : "";
      const backKycBase64 = verificationData.backFile
        ? await fileToBase64(verificationData.backFile)
        : "";

      // Construct the IKycVerificationRequest object
      const kycRequest: IKycVerificationRequest = {
        CompanyId: 2, // Replace with actual value if available
        UserId: userData?.staffUserId, // Replace with actual value if available
        FirstName: combinedData.firstName,
        LastName: combinedData.lastName,
        Email: combinedData.email,
        ContactNumber: combinedData.phoneNumber,
        DateOfBirth: combinedData.dob,
        Address: combinedData.addressLine,
        Nationality: combinedData.nationality,
        DocumentType: combinedData.selectedID,
        FrontKyc: frontKycBase64,
        BackKyc: backKycBase64,
      };

      console.log(
        "🚀 ~ handleSubmit ~ kycRequest:",
        JSON.stringify(kycRequest)
      );

      // Here you would typically send `kycRequest` to your API or backend service

      // Mark verification as complete
      // setVerificationComplete(true);
    } catch (error) {
      console.error("Error while preparing KYC request:", error);
    }
  };

  // Utility function to convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
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
          <PersonalDetails onChange={(data: any) => setPersonalData(data)} />
          <VerificationProcess
            onChange={(data: any) => setVerificationData(data)}
          />
        </div>
        <div className="button-row">
          <button
            type="button"
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit All
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountVerification;
