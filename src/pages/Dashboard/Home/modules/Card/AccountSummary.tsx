import React, { useMemo } from "react";
import AccountCard from "./AccountCard";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";

interface Account {
  title: string;
  amount: number;
  icon: string;
  action: string;
}

const AccountSummary: React.FC = () => {
  const { userInfo } = useUserInfoStore();

  const accounts = useMemo((): Account[] => {
    if (!userInfo) return [];

    return [
      {
        title: "E-Wallet",
        amount: userInfo.eWalletBalance,
        icon: "icon-wallet",
        action: "Transfer Ewallet",
      },
      {
        title: "Trading Balance",
        amount: userInfo.cTraderBalance,
        icon: "icon-trading-balance",
        action: "Transfer Trading",
      },
      {
        title: "Cash Equity",
        amount: userInfo.cTraderCashEquity,
        icon: "icon-cash-equity",
        action: "",
      },
      {
        title: "Bonus",
        amount: userInfo.cTraderBonus,
        icon: "icon-bonus",
        action: "",
      },
      {
        title: "Total Deposit",
        amount: 0.0, // Placeholder value, since it's not available from userInfo
        icon: "icon-total-deposit",
        action: "",
      },
      {
        title: "Total Withdrawal",
        amount: 0.0, // Placeholder value, since it's not available from userInfo
        icon: "icon-total-withdrawal",
        action: "",
      },
      {
        title: "Balance Available Withdrawal",
        amount: userInfo.cTraderWithdrawableBalance,
        icon: "icon-available-balance",
        action: "",
      },
      {
        title: "Used Margin",
        amount: 0.0, // Placeholder value, since it's not available from userInfo
        icon: "icon-used-margin",
        action: "",
      },
    ];
  }, [userInfo]);

  return (
    <div className="account-summary">
      <div className="account-cards">
        {accounts.map((account) => (
          <AccountCard
            key={account.title}
            title={account.title}
            amount={account.amount}
            icon={account.icon}
            onTransferClick={() =>
              account.action && console.log(account.action)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default AccountSummary;
