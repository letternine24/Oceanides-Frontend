import React, { useState, ChangeEvent } from "react";
import "./ProfileTab.css"; // Import the CSS file for styling
import { useUserInfoStore } from "@/store/user/useUserInfoStore";
import Textbox from "@components/TextBox/TextBox";
import MobileNumberWithCountryCodeTextbox from "@components/TextBox/MobileNumberWithCountryCodeTextBox";
import { useUpdateUserInfo } from "@/composables/user/useUpdateUserInfo";
import { useUserDataStore } from "@/store/user/useUserDataStore";

const ProfileTab: React.FC = () => {
  const { userInfo } = useUserInfoStore();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { updateUserInfo } = useUpdateUserInfo();
  const { userData } = useUserDataStore();

  const companyId = 2;
  const userInfoIds = {
    userId: userData?.staffUserId,
    companyId,
  };

  const [editValues, setEditValues] = useState({
    fullName: userInfo?.fullName || "",
    dateOfBirth: userInfo?.dateOfBirth || "",
    contactNumber: userInfo?.contactNumber || "",
    countryCode: userInfo?.countryCode || "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const formattedDateOfBirth = new Date(editValues.dateOfBirth).toISOString();
    const { countryCode, dateOfBirth, ...otherFields } = editValues;

    const updateUserInfoRequest = {
      ...userInfoIds,
      ...otherFields,
      dateOfBirth: formattedDateOfBirth,
    };

    try {
      await updateUserInfo(updateUserInfoRequest);
    } catch (e) {
      console.error("Error updating user info:", e);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <div className="profile-tab">
      <h4>Personal Details</h4>
      <hr />
      <div className="details-row">
        <div className="details-column">
          {!isEditing && <p>Full Name</p>}
          {isEditing ? (
            <Textbox
              value={editValues.fullName}
              labelName="Full Name"
              fieldName="fullName"
              fieldType="text"
              onChange={handleInputChange}
              required="required"
            />
          ) : (
            <p>{userInfo?.fullName}</p>
          )}
        </div>
        <div className="details-column">
          {!isEditing && <p>Date of Birth</p>}
          {isEditing ? (
            <Textbox
              value={editValues.dateOfBirth}
              labelName="Date of Birth"
              fieldName="dateOfBirth"
              fieldType="date"
              onChange={handleInputChange}
              required="required"
            />
          ) : (
            <p>{userInfo?.dateOfBirth}</p>
          )}
        </div>
      </div>

      <div className="details-row">
        <div className="details-column">
          {!isEditing && <p>Contact Number</p>}
          {isEditing ? (
            <MobileNumberWithCountryCodeTextbox
              countryCode={editValues.countryCode}
              mobileNumber={editValues.contactNumber}
              onMobileNumberChange={(mobileNumber) =>
                setEditValues((prevValues) => ({
                  ...prevValues,
                  contactNumber: mobileNumber,
                }))
              }
            />
          ) : (
            <p>{userInfo?.contactNumber}</p>
          )}
        </div>
      </div>

      {isEditing ? (
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
      ) : (
        <button className="edit-button" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
};

export default ProfileTab;
