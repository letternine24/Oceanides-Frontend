import React, { useState } from "react";
import "./MainContent.css";
import Greetings from "../Greetings/Greetings";
import ReferralForm from "@pages/Dashboard/shared/ReferralForm/ReferralForm";
import CryptoTradeView from "../Widget/CryptoTradeView";
import ForexTradeView from "../Widget/ForexTradeView";
import AccountSummary from "../Card/AccountSummary";

const MainContent = () => {
  const [activeView, setActiveView] = useState("crypto");

  const switchToCrypto = () => setActiveView("crypto");
  const switchToForex = () => setActiveView("forex");

  return (
    <>
      <Greetings />
      <div>
        <div>
          <h1 className="account-summary-h1">Account Summary</h1>
          <AccountSummary />
        </div>

        <ReferralForm />
      </div>
      <div className="trading-view-custom">
        <div>
          <button
            onClick={switchToForex}
            className={`toggle-button ${
              activeView === "forex" ? "active" : ""
            }`}
          >
            Track Forex Information
          </button>
          <button
            onClick={switchToCrypto}
            className={`toggle-button ${
              activeView === "crypto" ? "active" : ""
            }`}
          >
            Track Cryptocurrency Information
          </button>
        </div>

        <div className="component-container">
          {activeView === "crypto" && (
            <div className="fade-in">
              <CryptoTradeView />
            </div>
          )}
          {activeView === "forex" && (
            <div className="fade-in">
              <ForexTradeView />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainContent;
