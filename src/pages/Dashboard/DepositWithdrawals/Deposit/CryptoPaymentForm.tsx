import React, { useState } from "react";
import "./CryptoPaymentForm.css";

const CryptoPaymentForm: React.FC = () => {
  const [usdtAddress] = useState("Th4ALDMbTngHzzWvrPdLPbsqic6zGANYfi");
  const [networkType] = useState("TRC20");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Please upload payment proof before submitting.");
      return;
    }
    console.log("Submitting payment proof and transaction details.");
    alert("Payment proof submitted!");
  };

  return (
    <div className="crypto-payment-form">
      <div className="payment-method-header">
        <span className="method-badge">Your payment method: USDT</span>
      </div>
      <p>
        You are to make payment of MYR/IDR 431 (USD 100) using your selected
        payment method.
      </p>
      <div>
        <label>USDT Address:</label>
        <input type="text" value={usdtAddress} readOnly />
      </div>
      <div>
        <label>Network Type:</label>
        <input type="text" value={networkType} readOnly />
      </div>
      <div>
        <label>Upload Payment proof after payment:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button onClick={handleSubmit}>Submit Payment</button>
    </div>
  );
};

export default CryptoPaymentForm;
