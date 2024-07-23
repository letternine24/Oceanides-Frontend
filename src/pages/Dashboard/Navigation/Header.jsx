import React from "react";
import "./Header.css"; // Header component specific CSS file

const Header = () => {
  return (
    <header className="user-header">
      {/* Logo or title */}
      <div className="logo">
        <img src="/icon.png" alt="Icon" className="header-icon" />
        <h1>User Dashboard</h1>
      </div>
      {/* Navigation or user actions */}
      <nav className="user-navbar">
        <ul>
          <li>
            <a href="/">
              <img src="/icon-home.png" alt="Home" className="nav-icon" />
            </a>
          </li>
          <li>
            <a href="/profile">
              <img src="/icon-profile.png" alt="Profile" className="nav-icon" />
            </a>
          </li>
          {/* Add more navigation links with icons as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
