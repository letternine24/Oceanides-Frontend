import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import PageBody from "@components/Pages/PageBody";
import "@styles/Platform/Platform.css";
import "@styles/Components/PageBody.css";
import DemoBtn from "../../components/Buttons/DemoTrading";

const Platform = () => {
  const commonBg = "/assets/images/common-bg.png";
  const yellowBg = "/assets/images/main-yellow-bg.png";

  return (
    <>
      <main>
        <PageHeading pageHeader="cTrader Trading Platform">
          <h3>
            Experience our unparalleled cTrader conditions with commissions
            slashed to $35 per $1 million traded. Enjoy our best-ever trading
            environment featuring ultra-low spreads on FX and Metals.
          </h3>
          <h3>
            Pairing Corsa Futures’s cutting-edge trading infrastructure,
            competitive pricing, and impeccable order execution without dealing
            desk intervention*, the cTrader platform delivers an
            industry-leading and innovative trading experience.
          </h3>

          <DemoBtn />
        </PageHeading>

        {/* cTrader Desktop Platform */}
        <PageBody>
          <h1 className="page-body-header-platform">
            cTrader Desktop Platform
          </h1>

          <div className="page-body-text-platform">
            <h3>
              In addition to its extensive array of advanced technical features,
              the cTrader platform incorporates cTID (cTrader ID) login
              functionality. This unique feature allows seamless access to all
              linked accounts through a single login, ensuring synchronized
              settings. Download for free today and unlock a multitude of
              benefits when paired with the Corsa Futures cTrader account.
            </h3>

            <div className="platform-content-container">
              <div className="platform-content-left">
                <div className="border">
                  <h3>
                    + 55+ pre – installed technical indicators
                    <br/>
                    + 6 chart types & 28 Timeframes
                    <br/>
                    + Level 2 Depth of Market (DoM)
                    <br/>
                    + No restrictions on stop / limit levels
                    <br/>
                    + Additional pending order types
                    <br/>
                    + Detachable charts & linked charts
                    <br/>
                    + 1-click trading & trade from charts
                    <br/>
                    + Advanced Order Protection (sell stop limit & buy stop limit)
                    <br/>
                    + Trailing stop
                    <br/>
                    + Fully customizable charts and interface
                    <br/>
                    + Add custom cBots & indicators
                    <br/>
                    + News feed
                    <br/>
                    + Integrated Economic Calendar
                    <br/>
                    + Market Sentiment
                    <br/>
                    + Custom time zone
                    <br/>
                    + Analyze trade statistic
                    <br/>
                  </h3>
                </div>
              </div>

              <div className="flex-placeholder"></div>

              <div className="platform-content-right">
                <div className="container">
                  <img
                    src="/assets/icons/trading-img-ic.png"
                    className="img-size"
                  />

                  <div className="download-section">
                    <h1>Download Now</h1>

                    <h2>
                        Now you can download the app through Apple and Google
                        Store
                    </h2>
                    
                    <img src="/assets/icons/download.png" className="img-size" />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageBody>
        {/* cTrader Desktop Platform */}

        {/* Download Ctrader For Windows */}

        <PageBody pageBgImg={commonBg}>
          
          <h1 className="page-body-header-platform white-text">
            <div className="page-body-hr"></div>
            cTrader Desktop Platform
          </h1>

          <div className="platform-content-container">
            <div className="platform-content-left">
              <div className="container page-body-text-platform white-text">
                <h3 className="custom-padding">
                  Get your complimentary download today and leverage the full
                  range of advantages it brings when used alongside the Corsa
                  Futures cTrader account.
                </h3>
                
                <div className="overlay-wrap">
                  <a href="https://getctrader.com/corsafutures/ctrader-corsafutures-setup.exe">
                    <img src="/assets/icons/ctdownload.png" className="img-size" />
                    <div className="highlight-overlay"></div>
                  </a>
                </div>

                <h3 className="custom-padding">
                  Supports Microsoft Windows 2008/7/8/10 operating systems.
                  Requires internet speed of 56kbps or higher.
                </h3>
              </div>
            </div>

            <div className="flex-placeholder"></div>

            <div className="platform-content-right">
              <div className="platform-margin">
                <img src="/assets/icons/laptop.png" className="img-size" />
              </div>
            </div>
          </div>

        </PageBody>

        {/* Download Ctrader For Windows */}

        {/* Download Ctrader For Mobile/Tablets/Web */}

        <PageBody>
          <div className="page-body-hr"></div>

          <div className="platform-content-container">
            <div className="platform-content-left">
              <div className="container">
                <h1 className="page-body-section-header-platform">
                  DOWNLOAD CTRADER FOR MOBILE & TABLETS
                </h1>

                <div className="page-body-section-platform">
                  <h3>
                    Incorporating an extensive array of advanced technical
                    features, the cTrader platform employs cTID (cTrader ID)
                    login functionality. This innovative feature enables access
                    to all linked accounts through a unified login, ensuring
                    synchronized settings. Avail yourself of the myriad benefits
                    by downloading for free today and harness the power of the
                    Corsa Futures cTrader account.
                  </h3>
                  <br/>
                  <h3>
                    + 50+ Technical Indicators
                    <br/>
                    + 6 Timeframes
                    <br/>
                    + Quick Trade Options
                    <br/>
                    + No Restrictions on Stop/Limit Levels
                    <br/>
                    + Depth of Markets (DoM)
                    <br/>
                    + Notifications for Execution and Price Alerts
                  </h3>
                  
                </div>
              </div>
            </div>

            <div className="flex-placeholder"></div>

            <div className="platform-content-right">
              <div className="platform-margin">
                <img src="/assets/icons/phone.png" className="img-size" />
              </div>
            </div>
          </div>

          <div className="platform-content-container">
            <div className="platform-content-left">
              <div className="container">
                <img src="/assets/icons/monitor.png" className="img-size" />
              </div>
            </div>

            <div className="flex-placeholder"></div>

            <div className="platform-content-left">
              <div className="container">
                <div className="page-body-hr"></div>
                <h1 className="page-body-section-header-platform">
                  DOWNLOAD CTRADER WEB PLATFORM
                </h1>

                <div className="page-body-section-platform">
                  <h3>
                    The cTrader web platform stands as a robust solution for
                    browser and Mac users, delivering equivalent advanced
                    functionalities to the desktop platform (excluding cTrader
                    Automate). Enjoy seamless access to your account from any
                    location at any time, eliminating the need for software
                    installation. System Requirements: Access from any device
                    through your internet browser (recommended to have the
                    latest updated version of browser).
                  </h3>
                  <br></br>

                  <a href="#">
                    <img src="/assets/icons/webtrader.png" className="img-size" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </PageBody>

        {/* Download Ctrader For Mobile/Tablets/Web */}

        <PageBody pageBgImg={yellowBg}>
          <h1 className="page-body-header-platform">
            UNSURE IF CTRADER SUITS YOUR NEEDS?
          </h1>

          <div className="page-body-text-platform">
            <h2>
              Contact our 24/7 support team via chat or email for direct
              assistance.
            </h2>
            <h3>Download cTrader for free and start trading with us today!</h3>

            <DemoBtn />
          </div>
        </PageBody>
      </main>
    </>
  );
};

export default Platform;
