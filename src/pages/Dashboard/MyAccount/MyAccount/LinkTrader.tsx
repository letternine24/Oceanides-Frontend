import React, { useState } from "react";
import "./LinkTrader.css";

const LinkTrader: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccessToken(event.target.value);
  };

  const handleLinkAccount = () => {
    // Handle the account linking logic here
    console.log("Linking account with token:", accessToken);
  };

  return (
    <div className="link-trader">
      <p>Link cTrader</p>
      <div className="input-group link-trader-field">
        <input
          type="text"
          value={accessToken}
          placeholder="Enter Access Token"
          onChange={handleInputChange}
        />
        <button
          className="button button-medium button-primary"
          onClick={handleLinkAccount}
        >
          Link Account
        </button>
      </div>
    </div>
  );
};

export default LinkTrader;
