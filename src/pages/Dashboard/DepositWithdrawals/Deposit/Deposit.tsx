import React, { useState, ChangeEvent } from "react";
import "./Deposit.css";
import BankTransferForm from "./BankTransferForm";
import CryptoPaymentForm from "./CryptoPaymentForm";
import PaymentForm from "./PaymentForm";
import { useFetchPaymentPlatforms } from "@/composables/cache/useFetchPaymentPlatforms";
import { IPaymentPlatform } from "@/interface/cache/IPaymentPlatform";
import { useFetchCurrencies } from "@/composables/cache/useFetchCurrencies";
import { ICurrency } from "@/interface/cache/ICurrency";
import { useUserDataStore } from "@/store/user/useUserDataStore";
import { useGenerateDepositUrlEss } from "@/composables/deposit/useGenerateDepositUrlEss";
import { IGenerateDepositUrlEssRequest } from "@/interface/deposit/IGenerateDepositUrlEss";
import { useGenerateDepositUrlSmilePayz } from "@/composables/deposit/useGenerateDepositUrlSmilePayz";
import { IGenerateDepositUrlSmilePayz } from "@/interface/deposit/IGenerateDepositUrlSmilePayz";
import { useDepositRequest } from "@/composables/deposit/useDepositRequest";
import { useSubmitDeposit } from "@/composables/deposit/useSubmitDeposit";

const Deposit: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [usdAmount, setUsdAmount] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [proofOfPayment, setProofOfPayment] = useState<File | null>(null);
  const [formHTMLString, setFormHTMLString] = useState<string>("");

  const { paymentPlatforms } = useFetchPaymentPlatforms(1, 2);
  const { currencies } = useFetchCurrencies();
  const { userData } = useUserDataStore();
  const { generateDepositUrl } = useGenerateDepositUrlEss();
  const { makeDepositRequest } = useDepositRequest();
  const { submitDeposit } = useSubmitDeposit();
  const { generateDepositUrlSmilePayz } = useGenerateDepositUrlSmilePayz();

  const BANK_TRANSFER = "Bank Transfer";
  const CRYPTO = "Cryptocurrency";
  const PAYMENT_GATEWAY = "Payment Gateway";
  const CURRENCY_CODE = userData?.currencyCode;

  const filterCurrency = currencies?.find(
    (currency: ICurrency) => currency.currencyCode === CURRENCY_CODE
  );

  const sellConversionRate = filterCurrency?.sellRate || 0;

  const handleMethodClick = (method: string) => {
    console.log(userData);
    console.log(paymentPlatforms);
    console.log(currencies);

    setSelectedMethod(method);
    setAmount("");
    setUsdAmount("");
    setShowForm(false);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currencyVal = e.target.value;
    setAmount(currencyVal);

    if (currencyVal && sellConversionRate) {
      const convertedUsd = (
        parseFloat(currencyVal) / sellConversionRate
      ).toFixed(2);
      setUsdAmount(convertedUsd);
    } else {
      setUsdAmount("");
    }
  };

  const handleUsdAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const usdValue = e.target.value;
    setUsdAmount(usdValue);

    if (usdValue && sellConversionRate) {
      const convertedVal = (parseFloat(usdValue) * sellConversionRate).toFixed(
        2
      );
      setAmount(convertedVal);
    } else {
      setAmount("");
    }
  };

  const handleProofOfPaymentChange = (file: File | null) => {
    setProofOfPayment(file);
    console.log("Proof of Payment updated:", file);
  };

  const bankTransferPlatform = paymentPlatforms?.find(
    (platform: IPaymentPlatform) =>
      platform.paymentTypeName === BANK_TRANSFER &&
      platform.activeDeposit === true
  );

  const isConfirmDisabled = !amount || !usdAmount;

  const cryptoPlatform = paymentPlatforms?.find(
    (platform: IPaymentPlatform) =>
      platform.paymentTypeName === CRYPTO && platform.activeDeposit === true
  );

  const selectedPaymentGatewayPlatform = paymentPlatforms?.find(
    (platform: IPaymentPlatform) =>
      (platform.paymentTypeName === PAYMENT_GATEWAY &&
        platform.activeDeposit === true &&
        CURRENCY_CODE === "MYR" &&
        platform.paymentPlatformName === "ESS") || //hardcode currency to select payment gateway
      (CURRENCY_CODE === "IDR" && platform.paymentPlatformName === "SmilePayz")
  );

  const handleConfirm = async () => {
    // Bank Transfer
    if (selectedMethod === BANK_TRANSFER) {
      if (bankTransferPlatform && userData) {
        // Create FormData to handle the request, including possible file uploads
        const requestData = new FormData();
        requestData.append("companyId", "2");
        requestData.append("userId", userData.staffUserId.toString());
        requestData.append("username", userData.username);
        requestData.append(
          "paymentPlatformId",
          bankTransferPlatform.paymentPlatformId.toString()
        );
        requestData.append("currencyCode", CURRENCY_CODE!);
        requestData.append("amount", amount);
        requestData.append("amountUsd", usdAmount);

        // If there is a file for receipt, append it as well (assuming proofOfPayment is the file object)
        if (proofOfPayment) {
          requestData.append("receipt", proofOfPayment);
        }

        console.log("Bank Transfer Request Data:", requestData);

        try {
          const response = await makeDepositRequest(requestData);
          console.log("Transaction Response:", response);

          if (response) {
            const submitDepositData = new FormData();
            submitDepositData.append("companyId", "2");
            submitDepositData.append("userId", userData.staffUserId.toString());
            submitDepositData.append("currencyCode", CURRENCY_CODE!);
            submitDepositData.append(
              "paymentPlatformId",
              bankTransferPlatform.paymentPlatformId.toString()
            );
            submitDepositData.append("amount", amount);
            submitDepositData.append("amountUsd", usdAmount);
            submitDepositData.append("transactionId", response.toString());

            // If there is a file for receipt, append it as well
            if (proofOfPayment) {
              submitDepositData.append("receipt", proofOfPayment);
            }

            console.log("Submit Deposit Data:", submitDepositData);

            await submitDeposit(submitDepositData);
          }
        } catch (err) {
          console.error("Error generating Transaction ID:", err);
        }
      } else {
        console.error("Bank platform or user data is missing");
      }
      setShowForm(true);
    }

    // Crypto
    if (selectedMethod === CRYPTO) {
      if (cryptoPlatform && userData) {
        // Create FormData to handle the request, including possible file uploads
        const requestData = new FormData();
        requestData.append("companyId", "2");
        requestData.append("userId", userData.staffUserId.toString());
        requestData.append("username", userData.username);
        requestData.append(
          "paymentPlatformId",
          cryptoPlatform.paymentPlatformId.toString()
        );
        requestData.append("currencyCode", CURRENCY_CODE!);
        requestData.append("amount", amount);
        requestData.append("amountUsd", usdAmount);

        // If there is a file for receipt, append it as well (assuming proofOfPayment is the file object)
        if (proofOfPayment) {
          requestData.append("receipt", proofOfPayment);
        }

        console.log("Crypto Request Data:", requestData);

        try {
          const response = await makeDepositRequest(requestData);
          console.log("Transaction Response:", response);

          if (response) {
            const submitDepositData = new FormData();
            submitDepositData.append("companyId", "2");
            submitDepositData.append("userId", userData.staffUserId.toString());
            submitDepositData.append("currencyCode", CURRENCY_CODE!);
            submitDepositData.append(
              "paymentPlatformId",
              cryptoPlatform.paymentPlatformId.toString()
            );
            submitDepositData.append("amount", amount);
            submitDepositData.append("amountUsd", usdAmount);
            submitDepositData.append("transactionId", response.toString());

            // If there is a file for receipt, append it as well
            if (proofOfPayment) {
              submitDepositData.append("receipt", proofOfPayment);
            }

            console.log("Submit Deposit Data:", submitDepositData);

            await submitDeposit(submitDepositData);
          }
        } catch (err) {
          console.error("Error generating Transaction ID:", err);
        }
      } else {
        console.error("Crypto platform or user data is missing");
      }
      setShowForm(true);
    }

    if (selectedMethod === PAYMENT_GATEWAY) {
      if (
        selectedPaymentGatewayPlatform &&
        selectedPaymentGatewayPlatform.paymentPlatformName === "ESS" &&
        userData
      ) {
        const requestData: IGenerateDepositUrlEssRequest = {
          userId: userData.staffUserId,
          cTraderLogin: userData.cTraderLogin,
          username: userData.username,
          email: userData.email,
          companyId: 2,
          paymentPlatformId: selectedPaymentGatewayPlatform.paymentPlatformId,
          currencyCode: CURRENCY_CODE!,
          amount: parseFloat(amount),
          amountUsd: parseFloat(usdAmount),
        };

        console.log(requestData);

        try {
          const response = await generateDepositUrl(requestData);
          console.log(response);
          if (response) {
            console.log("paymenturl:" + response.paymentUrl);
            setShowForm(true);
            setFormHTMLString(response.paymentUrl);
          }
        } catch (err) {
          console.error("Error generating deposit URL:", err);
        }
      } else if (
        selectedPaymentGatewayPlatform &&
        selectedPaymentGatewayPlatform.paymentPlatformName === "SmilePayz" &&
        userData
      ) {
        const requestData: IGenerateDepositUrlSmilePayz = {
          userId: userData.staffUserId,
          cTraderLogin: userData.cTraderLogin,
          username: userData.username,
          email: userData.email,
          companyId: 2,
          paymentPlatformId: selectedPaymentGatewayPlatform.paymentPlatformId,
          currencyCode: CURRENCY_CODE!,
          amount: parseFloat(amount),
          amountUsd: parseFloat(usdAmount),
          paymentMethodCode: "BNI", // TODO: hard code first then fetch from dropdown list
        };

        console.log(requestData);

        try {
          const response = await generateDepositUrlSmilePayz(requestData);
          console.log(response);
          if (response) {
            console.log("paymenturl:" + response.paymentUrl);
            setShowForm(true);
            setFormHTMLString(response.paymentUrl);
          }
        } catch (err) {
          console.error("Error generating deposit URL:", err);
        }
      } else {
        console.error("Payment platform or user data is missing");
      }
    }

    console.log(
      `Depositing ${amount} ${CURRENCY_CODE} and ${usdAmount} USD using ${selectedMethod}`
    );
  };

  return (
    <div className="deposit-container">
      <div className="deposit-methods">
        <h1>Deposit Methods</h1>
        <div className="methods-grid">
          {[PAYMENT_GATEWAY, BANK_TRANSFER, CRYPTO].map((method) => (
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
          <p>
            ${CURRENCY_CODE} TO USD Rate: {sellConversionRate}
          </p>
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
            <label htmlFor="amount">Amount (${CURRENCY_CODE})</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder={CURRENCY_CODE}
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
              onProofOfPaymentChange={handleProofOfPaymentChange}
            />
          )}
        {showForm && selectedMethod === CRYPTO && cryptoPlatform && (
          <CryptoPaymentForm
            walletAddress={cryptoPlatform.walletAddress}
            amount={amount}
            usdAmount={usdAmount}
          />
        )}

        {showForm &&
          selectedMethod === PAYMENT_GATEWAY &&
          selectedPaymentGatewayPlatform && (
            <PaymentForm formHTMLString={formHTMLString} />
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
