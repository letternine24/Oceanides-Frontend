import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/Trading/TradingAccountType.css";

const TradingAccountType = () => {

    const imgBg = '/assets/images/trading-account-bg.png'
    const imgStandard = '/assets/images/trading-account-standard.png'

    return (
      <>
        <main>

        <PageHeading pageHeader= "Trading Account Type" pageBgImg ={imgBg}>
            <div className="trading-account-type">
                <p>
                    Corsa Futures has condensed our exceptional trading conditions into two robust account types,
                    ensuring you never have to compromise on your trading experience again.
                </p>

                <h1>
                    Tailored Trading solutions for Every Trader
                </h1>
                <p>
                    At Corsa Futures, we provide a diverse range of trading accounts catering to every trading style and experience level.
                    Whether you engage in scalping, day trading, utilize EAs, or prefer discretionary trading – we’ve got you covered.
                </p>

                <div className="img-container">
                    <img src={imgStandard} />
                </div>
            </div>
        </PageHeading>
                                    
        </main>
      </>
    );
  };
  
  export default TradingAccountType;
  