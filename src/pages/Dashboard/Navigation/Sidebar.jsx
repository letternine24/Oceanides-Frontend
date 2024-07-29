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
            <img src="/assets/icons/dashboard-ic.png" alt="Home" className="menu-icon" /> Dashboard
          </a>
        </li>
        <li>
          <a href="/account">
            <img src="/assets/icons/myaccount-ic.png" alt="Account" className="menu-icon" />{" "}
            My Account
          </a>
        </li>
        <li>
          <a href="/profile">
            <img src="/assets/icons/db-profile-ic.png" alt="Profile" className="menu-icon" />{" "}
            Profile
          </a>
        </li>
        <li>
          <a href="/deposit-withdraw">
            <img
              src="/assets/icons/depwith-ic.png"
              alt="Deposit & Withdraw"
              className="menu-icon"
            />{" "}
            Deposit & Withdraw
          </a>
        </li>
        <li>
          <a href="/trade-signals">
            <img
              src="/assets/icons/tradesignal-ic.png"
              alt="Trade Signals"
              className="menu-icon"
            />
            Trade Signals
          </a>
        </li>
        <li>
          <a href="/referrals">
            <img
              src="/assets/icons/referrals-ic.png"
              alt="Referrals"
              className="menu-icon"
            />
            Referrals
          </a>
        </li>
        <li>
          <a href="/help">
            <img src="/assets/icons/help-ic.png" alt="Help" className="menu-icon" /> Help
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
