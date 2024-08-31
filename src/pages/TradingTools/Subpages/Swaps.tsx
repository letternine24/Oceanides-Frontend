import PageHeading from "@components/Pages/PageHeading";
import PageLinks from "@components/Pages/PageLinks";
import Images from "@components/Images/Images";
import "@styles/TradingTools/Swaps.css";
import { TradingCalculatorLinks } from "@utils/constants/Links";

const Swaps = () => {
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

        <div className="swaps-container">
          <div className="swaps-container-img">
            <Images
              name="swaps-calc"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
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
