import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/Trading/SubInstruments.css";
import PageLinks from "@components/Pages/PageLinks";
import { InstrumentLinks } from "@utils/constants/Links";

const Energies = () => {

    const imgBg = '/assets/images/instrument-bg.png'
    const imgSearch = '/assets/images/instrument-search.png'
    const imgIcon = '/assets/icons/instruments-energy-ic.png'

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
                    <h1>Energies</h1>
                    
                    <p>
                        Including energies such as oil and gas in your portfolio provides a valuable avenue for 
                        diversification. Gain access to these dynamic markets without the need to directly 
                        purchase the physical products, allowing for strategic exposure and flexibility in your 
                        investment strategy.
                    </p>

                    <div>
                        <div className="instrument-content-container">
                            <div className="content-paragraph">
                                <ul>
                                    <li>Trade Oil & Natural Gas</li>
                                    <li>Up to 1:400 Leverage</li>
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
  
  export default Energies;
  