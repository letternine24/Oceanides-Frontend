import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/TradingTools/EconomicCalendar.css";

const EconomicCalendar = () => {
  const backgroundImage = "https://corsafutures.com/wp-content/uploads/2024/01/12content2.png";

  return (
    <main>
      <PageHeading pageHeader="ECONOMIC CALENDAR" pageBgImg={backgroundImage}>
        <p>
          The Corsa Futures economic calendar enables you to stay informed about
          market-moving events by providing precise details including dates,
          times, currencies, and estimated volatility levels.
        </p>
        <div className="economic-calendar-container">
          <img
            src="https://corsafutures.com/wp-content/uploads/2024/01/12content3.png"
            className="economic-calendar-img"
          />
        </div>
        <p>
          Disclaimer: Due to the ever-fluctuating nature of the financial
          market, the scheduling of economic events and indicators are
          constantly changing. We are proud to share our economic calendar with
          you, but would remind you that due to external factors beyond our
          control.
        </p>
      </PageHeading>
    </main>
  );
};

export default EconomicCalendar;
