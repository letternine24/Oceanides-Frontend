import React from "react";
import "./MyAccount.css"; // Ensure the CSS file is correctly named and linked

const MyAccount = () => {
  return (
    <div className="my-account">
      <header className="account-header">
        <div className="account-balance">
          <label>Account Balance</label>
          <p>
            ID: 36358601 | 3970752 <span className="verified">Verified</span>
          </p>
          <h2>$0.00</h2>
          <div className="buttons">
            <button>Deposit</button>
            <button>Withdraw</button>
          </div>
        </div>
      </header>

      <section className="my-account-summary">
        <div className="summary-item">
          <label>Bonus</label>
          <p>$0.00</p>
        </div>
        <div className="summary-item">
          <label>Referral Bonus</label>
          <p>$0.00</p>
        </div>
        <div className="link-ctrader">
          <button>Enter Access Token</button>
          <button>Link Account</button>
        </div>
      </section>

      <section className="recent-transactions">
        <h3>Recent Transactions (0)</h3>
        <p>No record yet</p>
      </section>

      <section className="refer-and-earn">
        <label>Refer Us & Earn</label>
        <input type="text" value="https://trade.info@example.com" readOnly />
      </section>
    </div>
  );
};

export default MyAccount;
