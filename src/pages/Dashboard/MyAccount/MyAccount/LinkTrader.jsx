import React from "react";
import "./LinkTrader.css";

const LinkTrader = () => {
  return (
    <div className="link-trader">
      <p>Link cTrader</p>
      <div className="input-group link-trader-field">
        <input type="text" value="" placeholder="Enter Access Token" />
        <button
          class="button button-medium button-primary"
        >
          Link Account
        </button>
      </div>
    </div>
  );
};

export default LinkTrader;
