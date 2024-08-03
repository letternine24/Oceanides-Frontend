import React from "react";
import Deposit from "./modules/Deposit/Deposit";
import Withdrawals from "./modules/Withdrawals/Withdrawals";

const DepositWithdrawals = () => {
  return (
    <>
      <main className="main-content">
        {/* Main content area */}
        <div className="content">
          <Deposit />
          <Withdrawals />
        </div>
      </main>
    </>
  );
};

export default DepositWithdrawals;
