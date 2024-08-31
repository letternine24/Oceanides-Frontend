import "./DemoTrading.css";

const DemoBtn = () => {
  return (
    <div className="demo-container">
      <a href="/login" className="demo-button">
        <span>DEMO ACCOUNT</span>
      </a>
      <a href="/login" className="trading-button">
        <span>
          START TRADING
          <img src="/assets/icons/arrow-circle.png" className="arrow-icon" />
        </span>
      </a>
    </div>
  );
};

export default DemoBtn;
