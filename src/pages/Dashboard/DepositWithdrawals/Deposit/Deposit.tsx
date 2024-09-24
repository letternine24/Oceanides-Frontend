import React, { useState, ChangeEvent } from "react";
import "./Deposit.css";
import BankTransferForm from "./BankTransferForm";
import CryptoPaymentForm from "./CryptoPaymentForm";

const Deposit: React.FC = () => {
  const BANK_TRANSFER = "Bank Transfer";
  const CRYPTO = "Crypto";

  const conversionRate = 4.5;

  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [usdAmount, setUsdAmount] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleMethodClick = (method: string) => {
    setSelectedMethod(method);
    setAmount("");
    setUsdAmount("");
    setShowForm(false);
  };

  // Handle conversion from MYR to USD
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const myrValue = e.target.value;
    setAmount(myrValue);

    if (myrValue) {
      const convertedUsd = (parseFloat(myrValue) / conversionRate).toFixed(2);
      setUsdAmount(convertedUsd);
    } else {
      setUsdAmount("");
    }
  };

  const handleUsdAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const usdValue = e.target.value;
    setUsdAmount(usdValue);

    if (usdValue) {
      const convertedMyr = (parseFloat(usdValue) * conversionRate).toFixed(2);
      setAmount(convertedMyr);
    } else {
      setAmount("");
    }
  };

  const handleConfirm = () => {
    if (selectedMethod === BANK_TRANSFER || selectedMethod === CRYPTO) {
      setShowForm(true);
    }
    console.log(
      `Depositing ${amount} MYR and ${usdAmount} USD using ${selectedMethod}`
    );
  };

  const isConfirmDisabled = !amount || !usdAmount;

  return (
    <div className="deposit-container">
      <div className="deposit-methods">
        <h1>Deposit Methods</h1>
        <div className="methods-grid">
          {[BANK_TRANSFER, CRYPTO].map((method) => (
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

        <div>
          <p>Conversion Rate: 1 USD = {conversionRate} MYR</p>
        </div>

        <div className="amount-section">
          <div>
            <label htmlFor="usdAmount">Amount (USD)</label>
            <input
              type="number"
              id="usdAmount"
              value={usdAmount}
              onChange={handleUsdAmountChange}
              placeholder="USD"
            />
          </div>
          <div>
            <label htmlFor="amount">Amount (MYR)</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="MYR"
            />
          </div>

          <button onClick={handleConfirm} disabled={isConfirmDisabled}>
            Confirm
          </button>
        </div>

        <br />

        <p>
          Please enter the amount you wish to deposit to your account. Click on
          "Confirm" and you will be redirected to the payment page.
        </p>

        {showForm && selectedMethod === BANK_TRANSFER && <BankTransferForm />}
        {showForm && selectedMethod === CRYPTO && <CryptoPaymentForm />}
      </div>

      <div className="deposit-notes">
        <h2>Before you proceed with a deposit, please note the following:</h2>
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
            agencies, credit reference bureaus, and other parties we deem
            necessary to process your payment and/or verify your identity.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Deposit;
