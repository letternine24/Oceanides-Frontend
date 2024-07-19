import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import PageLinks from "@components/Pages/PageLinks";
import Images from "@components/Images/Images";
import "@styles/TradingTools/Currency.css";
import { TradingCalculatorLinks } from "@utils/constants/Links";

const Currency = () => {
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

        <div className="currency-container">
          <div className="currency-container-img">
            <Images name="currency-calc" />
          </div>

          <div className="currency-container-faq">
            <div className="currency-container-how-it-works">
              <h2>HOW IT WORKS:</h2>
              <p>
                Our currency converter enables you to convert to and from
                various currencies by using live currency rates.
              </p>
              <p>
                Firstly, enter the currency you are changing from and the
                currency you want to convert to. Following this, enter the
                amount you want to convert, and click calculate.
              </p>
            </div>

            <div className="currency-container-how-it-works">
              <h2>DID YOU KNOW?</h2>
              <p>
                Even though the forex market is open 24 hours a day, it is not
                active all the time.
              </p>
              <p>
                So which are the best hours to trade? The forex market opening
                and closing times depend on 4 major market sessions, briefly
                called Sydney, Tokyo, London, New York. These have exact market
                opening and closing times, which helps you decide when it is
                best to enter the market.
              </p>
            </div>
          </div>
        </div>
      </PageHeading>
    </main>
  );
};

export default Currency;
