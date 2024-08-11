import React, { useState } from "react";
import "./Withdrawals.css";

const Withdrawals = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState("");

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConfirm = () => {
    console.log(`Withdrawing ${amount} using ${selectedMethod}`);
    // Add your withdrawal process logic here
  };

  return (
    <div className="withdrawal-container">
      <div className="withdrawal-methods">
        <h1>Withdrawals</h1>
        <div className="methods-grid">
          {["FPX", "VISA", "Skrill"].map((method) => (
            <button
              key={method}
              className={`method-button ${
                selectedMethod === method ? "selected" : ""
              }`}
              onClick={() => handleMethodClick(method)}
            >
              {method}
            </button>
          ))}
        </div>
        <div className="amount-section">
          <label htmlFor="amount">Enter Amount</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="MYR 1000"
          />
          <button onClick={handleConfirm}>Confirm</button>
        </div>
        <p>
          Please enter the amount you wish to withdraw from your account. Click
          on "Confirm" and you will be redirected to the payment page
        </p>
      </div>
      <div className="withdrawal-notes">
        <h2>Before you proceed with a withdrawal please note the following:</h2>
        <ul>
          <li>
            We strongly suggest that you submit withdrawal requests after
            closing your positions.
          </li>
          <li>
            All withdrawals, excluding profits, can only be paid back to the
            credit/debit card that the deposit was initiated from, up to the
            deposited amount.
          </li>
          <li>
            By submitting a withdrawal request, you consent to your data being
            shared with third parties, including payment service providers,
            banks, card schemes, regulators, law enforcement, government
            agencies, credit reference bureaus and other parties we deem
            necessary to process your payment and/or verify your identity.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Withdrawals;
