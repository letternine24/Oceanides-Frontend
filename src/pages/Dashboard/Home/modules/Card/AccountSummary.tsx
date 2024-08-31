import React, { useState, useEffect } from "react";
import AccountCard from "./AccountCard";

interface Account {
  title: string;
  amount: number;
  icon: string;
  action: string;
}

const AccountSummary: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([
    {
      title: "E-Wallet",
      amount: 0.0,
      icon: "icon-wallet",
      action: "Transfer Ewallet",
    },
    {
      title: "Trading Balance",
      amount: 0.0,
      icon: "icon-trading-balance",
      action: "Transfer Trading",
    },
    { title: "Cash Equity", amount: 0.0, icon: "icon-cash-equity", action: "" },
    { title: "Bonus", amount: 0.0, icon: "icon-bonus", action: "" },
    {
      title: "Total Deposit",
      amount: 0.0,
      icon: "icon-total-deposit",
      action: "",
    },
    {
      title: "Total Withdrawal",
      amount: 0.0,
      icon: "icon-total-withdrawal",
      action: "",
    },
    {
      title: "Balance Available Withdrawal",
      amount: 0.0,
      icon: "icon-available-balance",
      action: "",
    },
    { title: "Used Margin", amount: 0.0, icon: "icon-used-margin", action: "" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const dataFromAPI = {
        Ewallet: 1000,
        TradingBalance: 1500,
        CashEquity: 2000,
        Bonus: 300,
        TotalDeposit: 5000,
        TotalWithdrawal: 1500,
        BalanceAvailableWithdrawal: 3500,
        UsedMargin: 1000,
      };

      const updatedAccounts = accounts.map((account) => {
        // Define the mapping from account title to the key in the dataFromAPI object
        const keyMap: { [key: string]: keyof typeof dataFromAPI } = {
          "E-Wallet": "Ewallet",
          "Trading Balance": "TradingBalance",
          "Cash Equity": "CashEquity",
          Bonus: "Bonus",
          "Total Deposit": "TotalDeposit",
          "Total Withdrawal": "TotalWithdrawal",
          "Balance Available Withdrawal": "BalanceAvailableWithdrawal",
          "Used Margin": "UsedMargin",
        };

        const apiKey = keyMap[account.title];
        return {
          ...account,
          amount: dataFromAPI[apiKey] || account.amount,
        };
      });

      setAccounts(updatedAccounts);
    };

    fetchData();
  }, [accounts]);

  return (
    <div className="account-summary">
      <div className="account-cards">
        {accounts.map((account) => (
          <AccountCard
            key={account.title}
            title={account.title}
            amount={account.amount}
            icon={account.icon}
            onTransferClick={() => console.log(account.action)}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountSummary;
