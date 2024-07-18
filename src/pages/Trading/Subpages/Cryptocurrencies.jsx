import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/Trading/SubInstruments.css";
import PageLinks from "@components/Pages/PageLinks";
import { InstrumentLinks } from "@utils/constants/Links";

const Cryptocurrencies = () => {

    const imgBg = '/assets/images/Trading/Instruments/instrument-bg.png'
    const imgIcon = '/assets/icons/Trading/Instruments/forex-ic.png'
    const imgSearch = '/assets/images/Trading/Instruments/search.png'

    return (
      <>
        <main>

        <PageHeading pageTitle="Instruments" pageHeader="Range of Markets" pageBgImg={imgBg}>
            <div className="page-header-instrument">
                <p>
                    Corsa Futures, your access point to the international financial landscape.
                </p>
            </div>

            <div className="instrument-container">
                <div className="page-instrument-hr"></div>
                <div className="page-instrument-content">
                    <h1>Precious Metals</h1>
                    
                    <p>
                        Engage in margin trading of the leading cryptocurrencies with a regulated broker, 
                        eliminating the necessity for a digital wallet.
                    </p>

                    <div>
                        <div className="instrument-content-container">
                            <div className="content-paragraph">
                                <ul>
                                    <li>Trade Cryptocurrencies on cTrader</li>
                                    <li>Automate your Trading Strategies</li>
                                    <li>No Digital Wallet Required</li>
                                </ul>
                                
                                <a href="#" className='page-instrument-button'>
                                    <span>
                                        START TRADING
                                        <img src="/assets/icons/arrow-circle.png" className="arrow-icon"/>
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
  
  export default Cryptocurrencies;
  