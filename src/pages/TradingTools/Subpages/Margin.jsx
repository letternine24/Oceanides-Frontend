import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/TradingTools/Margin.css";
import PageLinks from "@components/Pages/PageLinks";
import { TradingCalculatorLinks } from "@utils/constants/Links";

const Margin = () => {
  return (
    <main>
      <PageHeading
        pageHeader="TRADING CALCULATOR"
        pageHeaderImg={"trading-header"}
        pageSubHeader={
          "We provide you with Corsa Futures Trading Calculators to make your trading journey easier than simple."
        }
      >
        {/* COMPONENT */}
        <PageLinks links={TradingCalculatorLinks} />

        <div className="margin-container">
          <div className="margin-container-img">
            <img src="https://corsafutures.com/wp-content/uploads/2024/01/cal-4.png" />
          </div>

          <div className="margin-container-faq">
            <div className="margin-container-how-it-works">
              <h2>HOW IT WORKS:</h2>
              <p>
                Our margin calculator helps you calculate the margin needed to
                open and hold positions.
              </p>
              <p>
                Enter your account base currency, select the instrument and the
                leverage, and finally enter the size of your position in lots.
              </p>
            </div>

            <div className="margin-container-how-it-works">
              <h2>THE CALCULATION IS PERFORMED AS FOLLOWS:</h2>
              <p>
                Required Margin =Trade Size / Leverage * Account Currency
                Exchange Rate
                <br />
                <br />
                Example:
                <br />
                Volume in Lots: 5 (One Standard Lot = 100,000Units)
                <br />
                Leverage: 100
                <br />
                Account Base Currency: USD
                <br />
                Instrument: EUR/USD
                <br />
                Exchange Rate: 1.365 (EUR/USD)
                <br />
                <br />
                Required Margin = 500,000 / 100 * 1.365
                <br />
                Required margin is $6,825.00 USD
              </p>
            </div>
          </div>
        </div>
      </PageHeading>
    </main>
  );
};

export default Margin;
