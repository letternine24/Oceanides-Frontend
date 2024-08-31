import React from "react";
import "./Index.css";
import Tabs from "@components/Tabs/Tabs";
import ProfileTab from "./Tabs/ProfileTab";
import FinancialInformationTab from "./Tabs/FinancialInformationTab";
import SettingsSecurityTab from "./Tabs/SettingsSecurityTab";
import LegalTab from "./Tabs/LegalTab";
import ReferralForm from "@pages/Dashboard/shared/ReferralForm/ReferralForm";
import Disclaimer from "../shared/Disclaimer/Disclaimer";
import ProfileDetails from "./ProfileDetails/ProfileDetails";

// Define the type for the tab data
interface TabData {
  id: string;
  label: string;
  content: JSX.Element;
}

const Profile: React.FC = () => {
  const tabData: TabData[] = [
    { id: "home", label: "Profile", content: <ProfileTab /> },
    {
      id: "profile",
      label: "Financial Information",
      content: <FinancialInformationTab />,
    },
    {
      id: "contact",
      label: "Settings & Security",
      content: <SettingsSecurityTab />,
    },
    { id: "legal", label: "Legal", content: <LegalTab /> },
  ];

  return (
    <>
      <ProfileDetails />
      <Tabs tabs={tabData} />
      <ReferralForm />
      <Disclaimer />
    </>
  );
};

export default Profile;
