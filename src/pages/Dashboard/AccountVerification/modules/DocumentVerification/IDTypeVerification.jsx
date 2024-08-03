import React, { useState } from "react";
import "./IDTypeVerification.css";

const IDTypeVerification = () => {
  const [selectedID, setSelectedID] = useState("");

  const handleIDSelection = (idType) => {
    setSelectedID(idType);
  };

  return (
    <div className="id-verification-form">
      <div className="form-header">
        <img
          src="/path_to_logo/corsa-futures-logo.png"
          alt="Corsa Futures"
          className="logo"
        />
        <h1>Select ID Type</h1>
        <p>Your simple personal document required for identification</p>
      </div>

      <div className="id-types">
        <div
          className={`id-type ${selectedID === "passport" ? "selected" : ""}`}
          onClick={() => handleIDSelection("passport")}
        >
          <img src="/icons/passport-icon.png" alt="International Passport" />
          <p>International Passport</p>
        </div>
        <div
          className={`id-type ${
            selectedID === "national-id" ? "selected" : ""
          }`}
          onClick={() => handleIDSelection("national-id")}
        >
          <img src="/icons/national-id-icon.png" alt="National ID" />
          <p>National ID</p>
        </div>
        <div
          className={`id-type ${selectedID === "driver-id" ? "selected" : ""}`}
          onClick={() => handleIDSelection("driver-id")}
        >
          <img src="/icons/driver-id-icon.png" alt="Driver ID" />
          <p>Driver ID</p>
        </div>
      </div>

      <div className="verification-instructions">
        <p>
          To avoid delays when verifying account, Please make sure your document
          meets the criteria below:
        </p>
        <ul>
          <li>Chosen credential must not have expired.</li>
          <li>Document should be in good condition and clearly visible.</li>
          <li>Make sure that there is no light glare on the document.</li>
        </ul>
      </div>

      <div className="document-upload">
        <label>Upload Front and Back Side</label>
        <input type="file" />
      </div>

      <div className="confirmation">
        <label>
          <input type="checkbox" />
          All The Information I Have Entered Is Correct.
        </label>
      </div>

      <button className="submit-button">Submit Application</button>
    </div>
  );
};

export default IDTypeVerification;
