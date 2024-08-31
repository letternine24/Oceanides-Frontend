import React from "react";
import "./AccountRecordTransactions.css";

const AccountRecordTransactions: React.FC = () => {
  return (
    <div className="account-record-transactions">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>No record yet</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountRecordTransactions;
