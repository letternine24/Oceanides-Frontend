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
          <p>
            Experience our unparalleled cTrader conditions with commissions
            slashed to $35 per $1 million traded. Enjoy our best-ever trading
            environment featuring ultra-low spreads on FX and Metals.
          </p>
          <p>
            Pairing Corsa Futures’s cutting-edge trading infrastructure,
            competitive pricing, and impeccable order execution without dealing
            desk intervention*, the cTrader platform delivers an
            industry-leading and innovative trading experience.
          </p>

          <DemoBtn></DemoBtn>
        </PageHeading>

        {/* cTrader Desktop Platform */}
        <PageBody>
          <h1 className="page-body-header-platform">
            cTrader Desktop Platform
          </h1>

          <div className="page-body-text-platform">
            <p>
              In addition to its extensive array of advanced technical features,
              the cTrader platform incorporates cTID (cTrader ID) login
              functionality. This unique feature allows seamless access to all
              linked accounts through a single login, ensuring synchronized
              settings. Download for free today and unlock a multitude of
              benefits when paired with the Corsa Futures cTrader account.
            </p>

            <div className="platform-content-container">
              <div className="platform-content-left">
                <div className="border">
                  <p>+ 55+ pre – installed technical indicators</p>
                  <p>+ 6 chart types & 28 timeframes</p>
                  <p>+ Level 2 Depth of Market (DoM)</p>
                  <p>+ No restrictions on stop / limit levels</p>
                  <p>+ Additional pending order types</p>
                  <p>+ Detachable charts & linked charts</p>
                  <p>+ 1-click trading & trade from charts</p>
                  <p>
                    + Advanced Order Protection (sell stop limit & buy stop
                    limit)
                  </p>
                  <p>+ Trailing stop</p>
                  <p>+ Fully customizable charts and interface</p>
                  <p>+ Add custom cBots & indicators</p>
                  <p>+ News feed</p>
                  <p>+ Integrated Economic Calendar</p>
                  <p>+ Market Sentiment</p>
                  <p>+ Custom time zone</p>
                  <p>+ Analyze trade statistic</p>
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
                      <p>
                        Now you can download the app through Apple and Google
                        Store
                      </p>
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
                <p className="custom-padding">
                  Get your complimentary download today and leverage the full
                  range of advantages it brings when used alongside the Corsa
                  Futures cTrader account.
                </p>
                
                <div className="overlay-wrap">
                  <a href="https://getctrader.com/corsafutures/ctrader-corsafutures-setup.exe">
                    <img src="/assets/icons/ctdownload.png" className="img-size" />
                    <div className="highlight-overlay"></div>
                  </a>
                </div>

                <p className="custom-padding">
                  Supports Microsoft Windows 2008/7/8/10 operating systems.
                  Requires internet speed of 56kbps or higher.
                </p>
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
                <p className="page-body-section-header-platform">
                  DOWNLOAD CTRADER FOR MOBILE & TABLETS
                </p>

                <div className="page-body-section-platform">
                  <p>
                    Incorporating an extensive array of advanced technical
                    features, the cTrader platform employs cTID (cTrader ID)
                    login functionality. This innovative feature enables access
                    to all linked accounts through a unified login, ensuring
                    synchronized settings. Avail yourself of the myriad benefits
                    by downloading for free today and harness the power of the
                    Corsa Futures cTrader account.
                  </p>
                  <br></br>
                  <p>+ 50+ Technical Indicators</p>
                  <p>+ 6 Timeframes</p>
                  <p>+ Quick Trade Options</p>
                  <p>+ No Restrictions on Stop/Limit Levels</p>
                  <p>+ Depth of Markets (DoM)</p>
                  <p>+ Notifications for Execution and Price Alerts</p>
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
                <p className="page-body-section-header-platform">
                  DOWNLOAD CTRADER WEB PLATFORM
                </p>

                <div className="page-body-section-platform">
                  <p>
                    The cTrader web platform stands as a robust solution for
                    browser and Mac users, delivering equivalent advanced
                    functionalities to the desktop platform (excluding cTrader
                    Automate). Enjoy seamless access to your account from any
                    location at any time, eliminating the need for software
                    installation. System Requirements: Access from any device
                    through your internet browser (recommended to have the
                    latest updated version of browser).
                  </p>
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
            <p>
              {" "}
              Contact our 24/7 support team via chat or email for direct
              assistance.
            </p>
            <p>Download cTrader for free and start trading with us today!</p>

            <DemoBtn />
          </div>
        </PageBody>
      </main>
    </>
  );
};

export default Platform;
