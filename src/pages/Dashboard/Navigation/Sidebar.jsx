import React from "react";
import "./Sidebar.css"; // Sidebar component specific CSS file

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Sidebar content */}
      <div className="sidebar-header">
        <img src="/icon.png" alt="Icon" className="sidebar-icon" />
        <span className="sidebar-title">Dashboard</span>
      </div>
      <ul className="menu">
        <li>
          <a href="/">
            <img src="/icon-home.png" alt="Home" className="menu-icon" /> Home
          </a>
        </li>
        <li>
          <a href="/profile">
            <img src="/icon-profile.png" alt="Profile" className="menu-icon" />{" "}
            Profile
          </a>
        </li>
        <li>
          <a href="/account">
            <img src="/icon-account.png" alt="Account" className="menu-icon" />{" "}
            My Account
          </a>
        </li>
        <li>
          <a href="/deposit-withdraw">
            <img
              src="/icon-money.png"
              alt="Deposit & Withdraw"
              className="menu-icon"
            />{" "}
            Deposit & Withdraw
          </a>
        </li>
        <li>
          <a href="/trade-signals">
            <img
              src="/icon-signals.png"
              alt="Trade Signals"
              className="menu-icon"
            />
            Trade Signals
          </a>
        </li>
        <li>
          <a href="/referrals">
            <img
              src="/icon-referrals.png"
              alt="Referrals"
              className="menu-icon"
            />
            Referrals
          </a>
        </li>
        <li>
          <a href="/help">
            <img src="/icon-help.png" alt="Help" className="menu-icon" /> Help
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
