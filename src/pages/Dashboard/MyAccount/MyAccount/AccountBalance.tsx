import React from "react";
import "./AccountBalance.css";

interface AccountBalanceProps {
  accountId: string;
  accountAmount: number;
}

const AccountBalance: React.FC<AccountBalanceProps> = ({
  accountId,
  accountAmount,
}) => {
  return (
    <div className="account-balance card">
      <div className="row card-body account-balance-detail">
        <h3>Account Balance</h3>
        <span>
          ID: {accountId}
          <span className="verified">Verified</span>
        </span>
      </div>

      <div className="row card-body account-balance-actions">
        <h3>$ {accountAmount}</h3>
        <div>
          <button className="button button-small button-primary">
            Deposit
          </button>
          <button className="button button-small button-success">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
