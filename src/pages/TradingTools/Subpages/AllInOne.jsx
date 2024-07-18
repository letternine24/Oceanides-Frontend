import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/TradingTools/AllInOne.css";
import PageLinks from "@components/Pages/PageLinks";
import { TradingCalculatorLinks } from "@utils/constants/Links";

const AllInOne = () => {
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

        <div className="all-in-one-container">
          <div className="all-in-one-container-img">
            <img src="https://corsafutures.com/wp-content/uploads/2024/01/cal-1-544x705.png" />
          </div>

          <div className="all-in-one-container-faq">
            <div className="all-in-one-container-how-it-works">
              <h2>HOW IT WORKS:</h2>
              <p>
                Our all-in-one calculator enables you to calculate the required
                margin, pip value and swaps based on the instrument, as well as
                the leverage and the size of the position.
              </p>
              <p>
                Firstly, enter the instrument you are using, followed by your
                account base currency and leverage. After this, enter the
                position size and click calculate.
              </p>
            </div>

            <div className="all-in-one-container-how-it-works">
              <h2>DID YOU KNOW?</h2>
              <p>
                The Fibonacci Sequence is a series of numbers where the next
                number is the sum of adding up the two preceding numbers: 1, 1,
                2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, and so on until
                infinity.
              </p>
              <p>
                In Trading, the Fibonacci numbers are very often used to analyze
                the financial markets. They form one of the main pillars of
                technical analysis.
              </p>
            </div>
          </div>
        </div>
      </PageHeading>
    </main>
  );
};

export default AllInOne;
