import { useState } from "react";
import "./ReferralForm.css";

const ReferralForm: React.FC = () => {
  const referralLink = "https://trade.info@example.com";
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralLink).then(
      () => setCopySuccess("Copied!"),
      () => setCopySuccess("Failed to copy!")
    );
  };

  return (
    <div className="referral-form">
      <h2>Refer Us & Earn</h2>
      <p>Use the below link to invite your friends.</p>
      <div className="input-group referral-form-field">
        <input type="text" value={referralLink} readOnly />
        <button onClick={handleCopyClick}>
          <img src="/assets/icons/copy-ic.png" alt="Copy" />
        </button>
      </div>
      {copySuccess && <span className="copy-status">{copySuccess}</span>}
    </div>
  );
};

export default ReferralForm;
