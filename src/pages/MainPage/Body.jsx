import React from "react";
import PageBody from "@components/Pages/PageBody";
import "@styles/MainPage/Body.css";
import DemoBtn from "../../components/Buttons/DemoTrading";

const Body = () => {
  // background images
  const navigatingBg = "/assets/images/main-navigating-bg.png";
  const empoweringBg = "/assets/images/main-empowering-bg.png";
  const commonBg = "/assets/images/common-bg.png";
  const seizeBg = "/assets/images/main-seize-bg.png";
  const embarkBg = "/assets/images/main-embark-bg.png";
  const yellowBg = "/assets/images/main-yellow-bg.png";

  // icons
  const empoweringIC = "/assets/icons/main-empowering-ic.png";
  const tradingTextIC = "assets/icons/main-trading-text-ic.png";
  const tradingImgIC = "assets/icons/main-trading-img-ic.png";
  const downloadIC = "assets/icons/main-download-ic.png";
  const paymentIC = "assets/icons/main-payment-ic.png";
  const seizeIC = "assets/icons/main-seize-ic.png";

  return (
    <>
      <main>
        {/* Navigating */}
        <PageBody pageBgImg={navigatingBg}>
          <div className="mainpage-body-container">
            <div className="navigating-section">
              <h1>Navigating</h1>
              <h1>Opportunities,</h1>
              <h1>Mastering Markets:</h1>

              <h2>Your Trusted Investment Partner</h2>
              <DemoBtn />
              <div className="navigating-section-risk">
                <p>Risk Warning:</p>
                <p>
                  Trading involves risk. Please be aware of the risks involved
                  and seek independent advice if necessary.
                </p>
              </div>
            </div>
          </div>
        </PageBody>
        {/* Navigating */}

        {/* Empowering */}
        <PageBody pageBgImg={empoweringBg}>
          <div className="empowering-section">
            <h1>
              Empowering Your Financial Journey
              <br></br>
              with Precision and Performance.
            </h1>

            <div className="empowering-icon-container">
              <img src={empoweringIC} />
            </div>
          </div>
        </PageBody>
        {/* Empowering */}

        {/* Trading */}
        <PageBody pageBgImg={commonBg}>
          <div className="trading-section">
            <div className="main-page-hr"></div>
            <h1>
              Trading Anywhere,
              <br></br>
              at Any Time
            </h1>

            <div>
              <div className="trading-content-container">
                <div className="trading-content-left">
                  <h2>
                    Trade Global Stocks, Forex, Metals, Crypto CFDs and More
                    with our world recognized cTrader App.
                  </h2>

                  <img src={tradingTextIC} />
                </div>

                <div className="trading-content-right">
                  <img src={tradingImgIC} />
                </div>
              </div>
            </div>
          </div>
        </PageBody>
        {/* Trading */}

        {/* Download */}
        <PageBody pageBgImg="">
          <div className="mainpage-download-section">
            <div>
              <div className="mainpage-download-content-container">
                <div className="download-content-left">
                  <h1>Download Now</h1>

                  <h2>
                    Now you can download the app through Apple and Google Store
                  </h2>
                </div>

                <div className="download-content-right">
                  <img src={downloadIC} />
                </div>
              </div>
            </div>
          </div>
        </PageBody>
        {/* Download */}

        {/* Instant */}
        <PageBody pageBgImg={yellowBg}>
          <div className="mainpage-insant-section">
            <div>
              <div className="mainpage-insant-content-container">
                <div className="instant-content-left">
                  <div>
                    <h1>
                      Instant Deposits,
                      <br></br>
                      Fast withdrawals
                    </h1>

                    <h3>
                      Fund your account easily and securely through our wide
                      range of payment options
                    </h3>

                    <h3>Your funds are held securely in Tier 1 banks</h3>
                  </div>
                </div>

                <div className="instant-content-right">
                  <img src={paymentIC} />
                </div>
              </div>
            </div>
          </div>
        </PageBody>
        {/* Instant */}

        {/* Seize */}
        <PageBody pageBgImg={seizeBg}>
          <div className="seize-section">
            <h1>Seize your trading destiny</h1>

            <p>
              Join Today for Seamless Onboarding and Limitless Possibilities!
            </p>

            <div className="seize-icon-container">
              <img src={seizeIC} />
            </div>
          </div>
        </PageBody>
        {/* Seize */}

        {/* Embark */}
        <PageBody pageBgImg={embarkBg}>
          <div className="embark-section">
            <h1>
              <p>Embark with Us on an</p>
              <p>Exciting expedition</p>
            </h1>

            <p>Charting Success Together: Your Voyage Starts Here.</p>
            <p>Get Started! Sign up and access the Global</p>
            <p>Markets in less than 5 minutes.</p>

            <DemoBtn />
          </div>
        </PageBody>
        {/* Embark */}
      </main>
    </>
  );
};

export default Body;
