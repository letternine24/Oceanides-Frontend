import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/Trading/SubInstruments.css";
import PageLinks from "@components/Pages/PageLinks";
import { InstrumentLinks } from "@utils/constants/Links";

const Forex = () => {

    const imgBg = '/assets/images/instrument-bg.png'
    const imgSearch = '/assets/images/instrument-search.png'
    const imgIcon = '/assets/icons/instruments-forex-ic.png'

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
                    <h1>Forex</h1>
                    
                    <p>
                        The global Foreign Exchange market stands as the world’s largest and most liquid financial arena, boasting a staggering 
                        daily trade volume surpassing $6.5 trillion. It is an inclusive market that accommodates traders worldwide, operating 
                        around the clock, five days a week, offering unparalleled accessibility regardless of your geographical location.
                    </p>

                    <div>
                        <div className="instrument-content-container">
                            <div className="content-paragraph">
                                <ul>
                                    <li>60 Currency Pairs</li>
                                    <li>Up to 1:500 Leverage</li>
                                    <li>Tight Spreads</li>
                                    <li>Deep Liquidity</li>
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
  
  export default Forex;
  