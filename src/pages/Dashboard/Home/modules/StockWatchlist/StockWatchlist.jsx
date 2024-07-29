import React from "react";
import "./StockWatchlist.css"; // External CSS file for styling

const StockWatchlist = ({ icon, stockName, stockPrice, stockPercentage }) => {
  return (
    <div className="stock-watchlist">
      <div className="stock-list">
        <div className="stock-info">
          <img src={icon} alt="Stock Icon" className="stock-icon" />
          <h3 className="stock-name">{stockName}</h3>
        </div>
        <div className="stock-details">
          <p className="stock-price">${stockPrice}</p>
        </div>
      </div>

      <hr className="divider" />
      <div className="stock-percentage">
        {stockPercentage > 0 ? (
          <p className="positive">{`+${stockPercentage}%`}</p>
        ) : (
          <p className="negative">{`${stockPercentage}%`}</p>
        )}
      </div>
    </div>
  );
};

export default StockWatchlist;
