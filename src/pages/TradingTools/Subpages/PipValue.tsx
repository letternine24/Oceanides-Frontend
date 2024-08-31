import PageHeading from "@components/Pages/PageHeading";
import PageLinks from "@components/Pages/PageLinks";
import Images from "@components/Images/Images";
import "@styles/TradingTools/PipValue.css";
import { TradingCalculatorLinks } from "@utils/constants/Links";

const PipValue = () => {
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

        <div className="pip-value-container">
          <div className="pip-value-container-img">
            <Images
              name="pip-value-calc"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>

          <div className="pip-value-container-faq">
            <div className="pip-value-container-how-it-works">
              <h2>HOW IT WORKS:</h2>
              <p>
                Our pip calculator will help you determine the value per pip in
                your base currency so that you can monitor your risk per trade
                with more accuracy.
              </p>
              <p>
                All you need is your base currency, the instrument you are
                trading on, the exchange rate and your position size in order to
                calculate the value of a pip.
              </p>
            </div>

            <div className="pip-value-container-how-it-works">
              <h2>THE CALCULATION IS PERFORMED AS FOLLOWS:</h2>
              <p>
                Pip Value = (One Pip / Exchange Rate) * Lot Size
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
                Exchange Rate: 1.08962 (EUR/USD)
                <br />
                Lot Size: 1 Lot (100000 EUR)
                <br />
                <br />
                Pip Value = 0.0001 / 1.08962 * 100000
                <br />
                Each Pip is worth €9.18
              </p>
            </div>
          </div>
        </div>
      </PageHeading>
    </main>
  );
};

export default PipValue;
