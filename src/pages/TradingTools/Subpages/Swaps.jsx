import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/TradingTools/Swaps.css";
import PageLinks from "@components/Pages/PageLinks";
import { TradingCalculatorLinks } from "@utils/constants/Links";

const Swaps = () => {
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

        <div className="swaps-container">
          <div className="swaps-container-img">
            <img src="https://corsafutures.com/wp-content/uploads/2024/01/cal-5.png" />
          </div>

          <div className="swaps-container-faq">
            <div className="swaps-container-how-it-works">
              <h2>HOW IT WORKS:</h2>
              <p>
                A swap rate is a rollover interest rate, which credits to or
                debits from clients’ accounts when a position is held open
                overnight. The swap rate is credited or debited once for each
                day of the week when a position is rolled over, with the
                exception of Wednesday, when it is credited or debited 3 times
                (i.e. 7 swaps in 5 trading days).
              </p>
              <p>
                By using our swap calculator you can calculate the interest rate
                differential between the two currencies of the instrument on
                your open positions.
              </p>
              <p>
                Enter your account base currency, select the instrument, enter
                the account type, the trade size in lots and the leverage.
              </p>
            </div>

            <div className="swaps-container-how-it-works">
              <h2>THE CALCULATION IS PERFORMED AS FOLLOWS:</h2>
              <p>
                Swap = (One Point / Exchange Rate) * Trade Size (Lot Size) *
                Swap Value in Points
                <br />
                <br />
                Example:
                <br />
                One Pip: 0.0001
                <br />
                Account Base Currency: EUR
                <br />
                Instrument: EUR/USD
                <br />
                Exchange Rate: 1.0895 (EUR/USD)
                <br />
                Volume in Lots: 5 (One Standard Lot = 100,000 Units)
                <br />
                Short Swap Rate: 0.15
                <br />
                <br />
                Swap Value = (0.00001 / 1.0895) * (500,000 * 0.15)
                <br />
                Swap Value is €0.69
              </p>
              <p>
                *If the result is negative your account will be debited whereas
                if it is positive your account will be credited.
              </p>
            </div>
          </div>
        </div>
      </PageHeading>
    </main>
  );
};

export default Swaps;
