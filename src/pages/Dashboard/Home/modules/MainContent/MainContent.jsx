import React from "react";
import "./MainContent.css";
import Greetings from "../Greetings/Greetings";
import Banner from "../Banner/Banner";
import StockWatchlist from "../StockWatchlist/StockWatchlist";

const MainContent = () => {
  return (
    <main className="main-content">
      {/* Main content area */}
      <div className="content">
        <Greetings />
        <div className="banner-container">
          <Banner
            title="Banner Title"
            description="This is a description of the banner."
            showInputField={false}
            showImages={true}
          />
          <Banner
            title="Another Banner"
            description="Another description of the banner."
            icon="icon.png"
            showInputField={true}
            showImages={false}
          />
        </div>
        <div className="watchlist-container">
          <h2>Watchlist</h2>
          <div className="watchlist-content">
            <StockWatchlist
              icon="stock1.png"
              stockName="Stock A"
              stockPrice="100.00"
              stockPercentage={2.5}
            />
            <StockWatchlist
              icon="stock2.png"
              stockName="Stock B"
              stockPrice="50.00"
              stockPercentage={-1.8}
            />
            <StockWatchlist
              icon="stock2.png"
              stockName="Stock B"
              stockPrice="50.00"
              stockPercentage={-1.8}
            />
            <StockWatchlist
              icon="stock2.png"
              stockName="Stock B"
              stockPrice="50.00"
              stockPercentage={-1.8}
            />
            <StockWatchlist
              icon="stock2.png"
              stockName="Stock B"
              stockPrice="50.00"
              stockPercentage={-1.8}
            />

            <StockWatchlist
              icon="stock2.png"
              stockName="Stock B"
              stockPrice="50.00"
              stockPercentage={-1.8}
            />
            <StockWatchlist
              icon="stock2.png"
              stockName="Stock B"
              stockPrice="50.00"
              stockPercentage={-1.8}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
