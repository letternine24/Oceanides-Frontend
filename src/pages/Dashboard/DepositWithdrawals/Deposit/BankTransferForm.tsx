import React, { useState } from "react";
import "./BankTransferForm.css";

interface BankTransferFormProps {
  bankName: string;
  accountName: string;
  accountNumber: string;
  swiftCode: string;
  amount: string;
  onProofOfPaymentChange: (file: File | null) => void;
}

const BankTransferForm: React.FC<BankTransferFormProps> = ({
  bankName,
  accountName,
  accountNumber,
  swiftCode,
  amount,
  onProofOfPaymentChange
}) => {
  const [proofOfPayment, setProofOfPayment] = useState<File | null>(null);

  const handleProofOfPaymentChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setProofOfPayment(file);
      onProofOfPaymentChange(file);
    }
    else {
      setProofOfPayment(null);
      onProofOfPaymentChange(null); // Call the callback prop with null if no file
    }
  };

  const handleSubmit = () => {
    console.log("Bank Name:", bankName);
    console.log("Account Name:", accountName);
    console.log("Account Number:", accountNumber);
    console.log("Swift Code:", swiftCode);
    console.log("Amount:", amount);
    console.log("Proof of Payment:", proofOfPayment);

    
  };

  return (
    <div className="bank-transfer-form">
      <div className="payment-method-info">
        <span className="method-badge">Your payment method: </span>
        <span className="method-selected">Bank Transfer</span>
      </div>
      <p>
        You are to make payment of <strong>MYR/IDR {amount} (USD 100)</strong>{" "}
        using your selected payment method.
      </p>
      <div className="bank-transfer-details">
        <h2>Bank Transfer:</h2>
        <div className="form-group">
          <label htmlFor="bank-name">Bank Name</label>
          <input type="text" id="bank-name" value={bankName} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="account-name">Account Name</label>
          <input type="text" id="account-name" value={accountName} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="account-number">Account Number</label>
          <input
            type="text"
            id="account-number"
            value={accountNumber}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="swift-code">Swift Code</label>
          <input type="text" id="swift-code" value={swiftCode} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount (MYR)</label>
          <input type="text" id="amount" value={amount} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="payment-proof">
            Upload Payment Proof after payment:
          </label>
          <input
            type="file"
            id="payment-proof"
            accept="image/*, application/pdf"
            onChange={handleProofOfPaymentChange}
          />
        </div>
      </div>
      <button className="submit-payment-btn" onClick={handleSubmit}>
        Submit Payment
      </button>
    </div>
  );
};

export default BankTransferForm;
