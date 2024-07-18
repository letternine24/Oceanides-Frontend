import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/TradingTools/ProfitLoss.css";
import PageLinks from "@components/Pages/PageLinks";
import { TradingCalculatorLinks } from "@utils/constants/Links";

const ProfitLoss = () => {
  const headerImg =
    "https://corsafutures.com/wp-content/uploads/2024/01/12content4.png";

  return (
    <main>
      <PageHeading pageHeader="TRADING CALCULATOR" pageHeaderImg={headerImg}>
        <p>
          We provide you with Corsa Futures Trading Calculators to make your
          trading journey easier than simple.
        </p>

        {/* COMPONENT */}
        <PageLinks links={TradingCalculatorLinks} />

        <div className="profit-loss-container">
          <div className="profit-loss-container-img">
            <img src="https://front.corsafutures.com/wp-content/uploads/2024/01/cal-6.png" />
          </div>

          <div className="profit-loss-container-faq">
            <div className="profit-loss-container-how-it-works">
              <h2>HOW IT WORKS:</h2>
              <p>
                Our profit and loss calculator will help you find out how much
                you stand to lose or gain if your stop-loss and/or take-profit
                levels are reached.
              </p>
              <p>
                Select your base currency, the instrument you are trading on,
                your trade size in lots and account type. Set the opening price
                and your stop loss and take profit values.
              </p>
            </div>

            <div className="profit-loss-container-how-it-works">
              <h2>THE CALCULATION IS PERFORMED AS FOLLOWS:</h2>
              <p>
                SL / TP Levels = SL, TP Amount / Pip Value Formula * Exchange
                Rate
                <br />
                <br />
                Example:
                <br />
                TP Amount: 100 USD
                <br />
                SL Amount: 100 USD
                <br />
                Pip Value Formula: 1,000
                <br />
                Account Base Currency: USD
                <br />
                Instrument: USD/JPY
                <br />
                Exchange Rate: 110.252 (USD/JPY)
                <br />
                <br />
                SL / TP Levels = 100 / 1,000 * 110.252
                <br />
                SL / TP Levels = 11 pip
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="profit-loss-container">
          <div className="profit-loss-container-img">
            <img src="https://front.corsafutures.com/wp-content/uploads/2024/01/cal-7.png" />
          </div>

          <div className="profit-loss-container-faq">
            <div className="profit-loss-container-how-it-works">
              <h2>HOW IT WORKS:</h2>
              <p>
                Our profit and loss calculator will help you find out how much
                you stand to lose or gain if your stop-loss and/or take-profit
                levels have been reached.
              </p>
              <p>
                Select your base currency, the instrument you are trading on,
                your trade size in lots and account type. Set the opening price
                and your stop loss and take profit values.
              </p>
            </div>

            <div className="profit-loss-container-how-it-works">
              <h2>THE CALCULATION IS PERFORMED AS FOLLOWS:</h2>
              <p>
                SL / TP Amount = SL, TP Levels * Points * Volume in Lots *
                Contract Size * Exchange Rate
                <br />
                <br />
                Example:
                <br />
                TP Levels: 6254
                <br />
                SL Levels: 6254
                <br />
                Point: 0.001
                <br />
                Volume in Lots: 1
                <br />
                Contract Size: 100,000
                <br />
                Account Base Currency: USD
                <br />
                Instrument: USD/JPY
                <br />
                Exchange Rate: 110.255 (USD/JPY)
                <br />
                <br />
                SL / TP Amount = 6,254.00 * 0.001 * 1 * 100,000 * (1 / 110.255)
                <br />
                SL / TP Amount = $5,672.31
              </p>
            </div>
          </div>
        </div>
      </PageHeading>
    </main>
  );
};

export default ProfitLoss;
