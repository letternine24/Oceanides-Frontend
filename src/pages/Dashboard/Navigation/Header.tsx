import React from "react";
import "./Header.css";
import { useAuthStore } from "@/store/useAuthStore";

const Header: React.FC = () => {
  const { logout } = useAuthStore();

  return (
    <header className="user-header">
      <div className="logo">{/* Add logo content here if needed */}</div>
      <nav className="user-navbar">
        <ul>
          <li>
            <a href="/">
              <img
                src="/assets/icons/message-ic.png"
                alt="Messages"
                className="nav-icon"
              />
            </a>
          </li>
          <li>
            <a href="/profile">
              <img
                src="/assets/icons/profile-ic.png"
                alt="Profile"
                className="nav-icon"
              />
            </a>
          </li>
          <li>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
