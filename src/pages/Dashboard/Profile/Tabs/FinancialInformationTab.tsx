import React from "react";
import "./FinancialInformationTab.css"; // Import the CSS file for styling

const FinancialInformationTab: React.FC = () => {
  return (
    <div className="financial-info-tab">
      <h4>Tax Information</h4>
      <hr />
      <div className="info-row">
        <div className="info-column">
          <p>Tax Identification Number (TIN)</p>
          <p>N/A</p>
        </div>
        <div className="info-column">
          <p>Tax Residency</p>
          <p>N/A</p>
        </div>
      </div>

      <h4>Financial Information</h4>
      <hr />

      <div className="info-row">
        <div className="info-column">
          <p>Total Annual Income (USD)</p>
          <p>0</p>
        </div>
        <div className="info-column">
          <p>Investment Amount (USD)</p>
          <p>0</p>
        </div>
      </div>
      <div className="info-row">
        <div className="info-column">
          <p>Employment Status</p>
          <p>Employed</p>
        </div>
        <div className="info-column">
          <p>Employment Position</p>
          <p>Your Position</p>
        </div>
      </div>
      <div className="info-row">
        <div className="info-column">
          <p>Your Total Estimated Net Worth (USD)</p>
          <p>0</p>
        </div>
        <div className="info-column">
          <p>Source of Funds</p>
          <p>-</p>
        </div>
      </div>
      <button className="edit-button">Edit</button>
    </div>
  );
};

export default FinancialInformationTab;
