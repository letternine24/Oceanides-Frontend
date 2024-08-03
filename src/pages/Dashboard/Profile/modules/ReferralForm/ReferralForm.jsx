import React, { useState } from "react";
import "./ReferralForm.css";

const ReferralForm = () => {
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
      <h1>Refer Us & Earn</h1>
      <p>Use the below link to invite your friends.</p>
      <div className="input-group">
        <input type="text" value={referralLink} readOnly />
        <button onClick={handleCopyClick}>
          <img src="/path_to_copy_icon/copy-icon.png" alt="Copy" />
        </button>
      </div>
      {copySuccess && <span className="copy-status">{copySuccess}</span>}
    </div>
  );
};

export default ReferralForm;
