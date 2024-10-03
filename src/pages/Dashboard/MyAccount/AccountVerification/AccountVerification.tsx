import React, { useState } from "react";
import "./AccountVerification.css";
import PersonalDetails from "./PersonalDetails";
import VerificationProcess from "./VerificationProcess";
import { useUserDataStore } from "@/store/user/useUserDataStore";
import { useKycVerification } from "@/composables/user/useKycVerification";

const AccountVerification: React.FC = () => {
  const [personalData, setPersonalData] = useState<any>({});
  const [verificationData, setVerificationData] = useState<any>({});
  const { userData } = useUserDataStore();
  const { kycVerification, loading } = useKycVerification();

  const handleSubmit = async () => {
    try {
      // Combine data from both components
      const combinedData = { ...personalData, ...verificationData };

      // Construct FormData
      const formData = new FormData();
      formData.append("CompanyId", "2"); // Replace with actual value if available
      formData.append("UserId", String(userData?.staffUserId || ""));
      formData.append("FirstName", combinedData.firstName);
      formData.append("LastName", combinedData.lastName);
      formData.append("Email", combinedData.email);
      formData.append("ContactNumber", combinedData.phoneNumber);
      formData.append("DateOfBirth", combinedData.dob);
      formData.append("Address", combinedData.addressLine);
      formData.append("Nationality", combinedData.nationality);
      formData.append("DocumentType", combinedData.selectedID);

      // Append files if available
      if (verificationData.frontFile) {
        formData.append("FrontKyc", verificationData.frontFile);
      }
      if (verificationData.backFile) {
        formData.append("BackKyc", verificationData.backFile);
      }

      // Call the useKycVerification function to send the data
      kycVerification(formData);
    } catch (error) {
      console.error("Error while preparing KYC request:", error);
    }
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
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit All"}
          </button>
        </div>
        {/* {error && <p className="error-message">Error: {error}</p>} */}
      </div>
    </>
  );
};

export default AccountVerification;
