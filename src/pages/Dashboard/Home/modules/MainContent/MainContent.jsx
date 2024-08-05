import React, { useState  } from "react";
import "./MainContent.css";
import Greetings from "../Greetings/Greetings";
import Banner from "../Banner/Banner";
import StockWatchlist from "../StockWatchlist/StockWatchlist";
import ReferralForm from "../../../Profile/modules/ReferralForm/ReferralForm";
import CryptoTradeView from '../Widget/CryptoTradeView';
import ForexTradeView from "../Widget/ForexTradeView";
import AccountSummary from "../Card/AccountSummary";

const MainContent = () => {

  const [activeView, setActiveView] = useState('crypto'); // Start with CryptoTradeView

    const switchToCrypto = () => setActiveView('crypto');
    const switchToForex = () => setActiveView('forex');

  return (
    <main className="main-content">
      {/* Main content area */}
      <div className="content">
        <Greetings />
        {/* <div className="banner-container"> */}
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
                    className={`toggle-button ${activeView === 'forex' ? 'active' : ''}`}
                >
                    Track Forex Information
                </button>
                <button
                    onClick={switchToCrypto}
                    className={`toggle-button ${activeView === 'crypto' ? 'active' : ''}`}
                >
                    Track Cryptocurrency Information
                </button>
            </div>
            
            <div className="component-container">
                {activeView === 'crypto' && (
                    <div className="fade-in">
                        <CryptoTradeView />
                    </div>
                )}
                {activeView === 'forex' && (
                    <div className="fade-in">
                        <ForexTradeView />
                    </div>
                )}
            </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
