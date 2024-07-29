import React from "react";
import "./Header.css"; // Header component specific CSS file

const Header = () => {
  return (
    <header className="user-header">
      {/* Logo or title */}
      <div className="logo">
        <img src="/assets/images/corsa-logo-transparent.png" alt="Icon" className="header-icon" />
        <h1>User Dashboard</h1>
      </div>
      {/* Navigation or user actions */}
      <nav className="user-navbar">
        <ul>
          <li>
            <a href="/">
              <img src="/assets/icons/message-ic.png" alt="Home" className="nav-icon" />
            </a>
          </li>
          <li>
            <a href="/profile">
              <img src="/assets/icons/profile-ic.png" alt="Profile" className="nav-icon" />
            </a>
          </li>
          {/* Add more navigation links with icons as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
