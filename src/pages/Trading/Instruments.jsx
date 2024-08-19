import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/Trading/Instruments.css";
import PageLinks from "@components/Pages/PageLinks";
import { InstrumentLinks } from "@utils/constants/Links";

const Instruments = () => {

    const imgBg = '/assets/images/instrument-bg.png'
    const imgInstrument = '/assets/images/instrument-list.png'
    const imgSearch = '/assets/images/instrument-search.png'

    return (
      <>
        <main>

        <PageHeading pageTitle="Instruments" pageHeader="Range of Markets" pageBgImg={imgBg}>
            <div className="page-header-instrument">
                <h3>
                    Corsa Futures, your access point to the international financial landscape.
                </h3>
            </div>

            <div>
                <img src={imgInstrument} />
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
  
  export default Instruments;
  