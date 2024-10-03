import React, { useState, ChangeEvent } from "react";
import "./Deposit.css";
import BankTransferForm from "./BankTransferForm";
import CryptoPaymentForm from "./CryptoPaymentForm";
import { useFetchPaymentPlatforms } from "@/composables/cache/useFetchPaymentPlatforms";
import { IPaymentPlatform } from "@/interface/cache/IPaymentPlatform";
import { useFetchCurrencies } from "@/composables/cache/useFetchCurrencies";
import { ICurrency } from "@/interface/cache/ICurrency";

const Deposit: React.FC = () => {
  const BANK_TRANSFER = "Bank Transfer";
  const CRYPTO = "Cryptocurrency";
  const CURRENCY_CODE = "MYR";

  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [usdAmount, setUsdAmount] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);

  const { paymentPlatforms } = useFetchPaymentPlatforms(1, 2);
  const { currencies } = useFetchCurrencies();

  const filterCurrencyMyr = currencies?.find(
    (currency: ICurrency) => currency.currencyCode === CURRENCY_CODE
  );

  const sellConversionRate = filterCurrencyMyr?.sellRate || 0;

  const handleMethodClick = (method: string) => {
    setSelectedMethod(method);
    setAmount("");
    setUsdAmount("");
    setShowForm(false);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const myrValue = e.target.value;
    setAmount(myrValue);

    if (myrValue && sellConversionRate) {
      const convertedUsd = (parseFloat(myrValue) / sellConversionRate).toFixed(
        2
      );
      setUsdAmount(convertedUsd);
    } else {
      setUsdAmount("");
    }
  };

  const handleUsdAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const usdValue = e.target.value;
    setUsdAmount(usdValue);

    if (usdValue && sellConversionRate) {
      const convertedMyr = (parseFloat(usdValue) * sellConversionRate).toFixed(
        2
      );
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

  const bankTransferPlatform = paymentPlatforms?.find(
    (platform: IPaymentPlatform) => platform.paymentTypeName === BANK_TRANSFER
  );

  const cryptoPlatform = paymentPlatforms?.find(
    (platform: IPaymentPlatform) => platform.paymentTypeName === CRYPTO
  );

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
          <p>MYR TO USD Rate: {sellConversionRate}</p>
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

        {showForm &&
          selectedMethod === BANK_TRANSFER &&
          bankTransferPlatform && (
            <BankTransferForm
              bankName={bankTransferPlatform.bankName}
              accountName={bankTransferPlatform.bankAccountName}
              accountNumber={bankTransferPlatform.bankAccountNumber}
              swiftCode={bankTransferPlatform.bankSwiftCode}
              amount={amount}
            />
          )}
        {showForm && selectedMethod === CRYPTO && cryptoPlatform && (
          <CryptoPaymentForm
            walletAddress={cryptoPlatform.walletAddress}
            amount={amount}
            usdAmount={usdAmount}
          />
        )}
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
