import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/Trading/SubInstruments.css";
import PageLinks from "@components/Pages/PageLinks";
import { InstrumentLinks } from "@utils/constants/Links";

const Commodities = () => {

    const imgBg = '/assets/images/instrument-bg.png'
    const imgSearch = '/assets/images/instrument-search.png'
    const imgIcon = '/assets/icons/instruments-commodities-ic.png'

    return (
      <>
        <main>

        <PageHeading pageTitle="Instruments" pageHeader="Range of Markets" pageBgImg={imgBg}>
            <div className="page-header-instrument">
                <h3>
                    Corsa Futures, your access point to the international financial landscape.
                </h3>
            </div>

            <div className="instrument-container">
                <div className="page-instrument-hr"></div>
                <div className="page-instrument-content">
                    <h1>Commodities</h1>
                    
                    <p>
                        Comprising perishable items, commodities often denote products that are cultivated 
                        rather than extracted from mines. Among the widely sought-after soft commodities are 
                        Cocoa, Coffee, Cotton, and Sugar.
                    </p>

                    <div>
                        <div className="instrument-content-container">
                            <div className="content-paragraph">
                                <ul>
                                    <li>CFDs on Futures</li>
                                    <li>Up to 1:400 Leverage</li>
                                </ul>

                                <a href="https://app.corsafutures.com/" className='page-instrument-button'>
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
  
  export default Commodities;
  