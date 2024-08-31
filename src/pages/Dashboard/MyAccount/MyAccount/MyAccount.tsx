import React from "react";
import "./MyAccount.css"; // Ensure the CSS file is correctly named and linked
import ReferralForm from "@pages/Dashboard/shared/ReferralForm/ReferralForm";
import AccountBalance from "./AccountBalance";
import AccountSummary from "./AccountSummary";
import AccountRecordTransactions from "./AccountRecordTransactions";

const MyAccount: React.FC = () => {
  return (
    <section className="my-account">
      <h1>Account</h1>
      <AccountBalance accountId="36358601 | 3970752" accountAmount={123.0} />
      <AccountBalance accountId="397332 | 3633301" accountAmount={456.67} />

      <h1>Account Summary</h1>
      <hr />
      <AccountSummary />

      <h1>Recent Transactions (0)</h1>
      <AccountRecordTransactions />

      <ReferralForm />
    </section>
  );
};

export default MyAccount;
