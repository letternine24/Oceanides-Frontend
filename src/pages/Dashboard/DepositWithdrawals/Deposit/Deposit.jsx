import React, { useState } from "react";
import "./Deposit.css";

const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setAmount] = useState("");

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConfirm = () => {
    console.log(`Depositing ${amount} using ${selectedMethod}`);
    // Add your redirect or confirmation logic here
  };

  return (
    <div className="deposit-container">
      <div className="deposit-methods">
        <h1>Deposit Methods</h1>
        <div className="methods-grid">
          {["FPX", "VISA", "Crypto"].map((method) => (
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
          Please enter the amount you wish to deposit to your account. Click on
          "Confirm" and you will be redirected to the payment page
        </p>
      </div>
      <div className="deposit-notes">
        <h2>Before you proceed with a deposit please note the following:</h2>
        <ul>
          <li>
            Please make sure that all payments are made from an account
            registered in the same name as your Corsa Futures account.
          </li>
          <li>
            All withdrawals, excluding profits, can only be paid back to the
            credit/debit card that the deposit was initiated from, up to the
            deposited amount.
          </li>
          <li>
            By submitting a deposit request, you consent to your data being
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

export default Deposit;
