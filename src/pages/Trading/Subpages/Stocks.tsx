import PageHeading from "@components/Pages/PageHeading";
import "@styles/Trading/SubInstruments.css";
import PageLinks from "@components/Pages/PageLinks";
import { InstrumentLinks } from "@utils/constants/Links";

const Stocks = () => {
  const imgBg = "/assets/images/instrument-bg.png";
  const imgSearch = "/assets/images/instrument-search.png";
  const imgIcon = "/assets/icons/instruments-stocks-ic.png";

  return (
    <>
      <main>
        <PageHeading
          pageTitle="Instruments"
          pageHeader="Range of Markets"
          pageBgImg={imgBg}
        >
          <div className="page-header-instrument">
            <h3>
              Corsa Futures, your access point to the international financial
              landscape.
            </h3>
          </div>

          <div className="instrument-container">
            <div className="page-instrument-hr"></div>
            <div className="page-instrument-content">
              <h1>Stocks</h1>

              <p>
                Unlock a diverse portfolio with access to 100+ shares spanning
                the globe’s major markets. Experience the significant advantage
                of trading CFDs on shares, enabling you to harness the full
                momentum of stock prices with the benefit of a modest initial
                deposit.
              </p>

              <div>
                <div className="instrument-content-container">
                  <div className="content-paragraph">
                    <ul>
                      <li>100+ Global Stocks</li>
                      <li>Earn Dividends on Your Stocks</li>
                      <li>Trade on the go with cTrader</li>
                    </ul>

                    <a
                      href="https://app.corsafutures.com/"
                      className="page-instrument-button"
                    >
                      <span>
                        START TRADING
                        <img
                          src="/assets/icons/arrow-circle.png"
                          className="arrow-icon"
                        />
                      </span>
                    </a>
                  </div>

                  <div className="">
                    <img src={imgIcon} />
                    <div className="page-instrument-hr-custom" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-links">
            <h1>List of Trading Instruments</h1>
            <PageLinks links={InstrumentLinks} />
          </div>

          <div>
            <img src={imgSearch} />
          </div>
        </PageHeading>
      </main>
    </>
  );
};

export default Stocks;
