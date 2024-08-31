import React from "react";
import Deposit from "./Deposit/Deposit";
import Withdrawals from "./Withdrawals/Withdrawals";
import Tabs from "@components/Tabs/Tabs";
import Disclaimer from "../shared/Disclaimer/Disclaimer";

interface TabData {
  id: string;
  label: string;
  content: React.ReactNode;
}

const DepositWithdrawals: React.FC = () => {
  const tabData: TabData[] = [
    { id: "deposit", label: "Deposit", content: <Deposit /> },
    {
      id: "withdrawals",
      label: "Withdrawals",
      content: <Withdrawals />,
    },
  ];

  return (
    <>
      <Tabs tabs={tabData} />
      <Disclaimer />
    </>
  );
};

export default DepositWithdrawals;
