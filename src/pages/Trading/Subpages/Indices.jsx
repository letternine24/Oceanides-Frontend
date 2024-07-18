import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/Trading/SubInstruments.css";
import PageLinks from "@components/Pages/PageLinks";
import { InstrumentLinks } from "@utils/constants/Links";

const Indices = () => {

    const imgBg = '/assets/images/instrument-bg.png'
    const imgSearch = '/assets/images/instrument-search.png'
    const imgIcon = '/assets/icons/instruments-forex-ic.png'

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
                    <h1>Indices</h1>
                    
                    <p>
                        Explore the unique opportunity to gain exposure to a nation’s stock market performance 
                        through trading indices. Engage in CFDs on indices and speculate on the dynamic 
                        performance of global stock markets, opening avenues for
                        strategic investment and potential profit.
                    </p>

                    <div>
                        <div className="instrument-content-container">
                            <div className="content-paragraph">
                                <ul>
                                    <li>15+ Global Indices</li>
                                    <li>Up to 1:200 Leverage</li>
                                    <li>No commissions</li>
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
  
  export default Indices;
  