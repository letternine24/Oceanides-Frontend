import React, { useState } from "react";
import "./IDTypeVerification.css";

const IDTypeVerification = ({ setVerificationComplete }) => {
  const [selectedID, setSelectedID] = useState("");
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [isInfoCorrect, setIsInfoCorrect] = useState(false);

  const handleIDSelection = (idType) => {
    setSelectedID(idType);
  };

  const handleFileChange = (event, side) => {
    const file = event.target.files[0];
    if (side === "front") {
      setFrontFile(file);
    } else {
      setBackFile(file);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsInfoCorrect(event.target.checked);
  };

  const handleSubmit = () => {
    if (!selectedID || !frontFile || !backFile || !isInfoCorrect) {
      alert("Please complete all fields and ensure information is correct.");
      return;
    }

    // Handle file upload and form submission logic here
    const formData = new FormData();
    formData.append("selectedID", selectedID);
    formData.append("frontFile", frontFile);
    formData.append("backFile", backFile);

    // Simulate a file upload
    console.log("Submitting form with data:", formData);
    setVerificationComplete(true);
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
          To avoid delays when verifying your account, please make sure your
          document meets the criteria below:
        </p>
        <ul>
          <li>Chosen credential must not have expired.</li>
          <li>Document should be in good condition and clearly visible.</li>
          <li>Make sure that there is no light glare on the document.</li>
        </ul>
      </div>

      <div className="document-upload">
        <label>Upload Front Side</label>
        <input type="file" onChange={(e) => handleFileChange(e, "front")} />
        <label>Upload Back Side</label>
        <input type="file" onChange={(e) => handleFileChange(e, "back")} />
      </div>

      <div className="confirmation">
        <label>
          <input
            type="checkbox"
            checked={isInfoCorrect}
            onChange={handleCheckboxChange}
          />
          All The Information I Have Entered Is Correct.
        </label>
      </div>

      <div className="button-row">
        <button className="submit-button" onClick={handleSubmit}>
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default IDTypeVerification;
