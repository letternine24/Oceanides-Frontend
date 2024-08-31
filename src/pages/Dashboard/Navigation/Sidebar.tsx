import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import UserProfile from "./modules/UserProfile/UserProfile";

// Define the type for menu items
interface MenuItem {
  path: string;
  label: string;
  icon: string;
}

// Array of menu items with path, label, and icon
const menuItems: MenuItem[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: "/assets/icons/dashboard-ic.png",
  },
  {
    path: "/my-account",
    label: "My Account",
    icon: "/assets/icons/myaccount-ic.png",
  },
  {
    path: "/profile",
    label: "Profile",
    icon: "/assets/icons/db-profile-ic.png",
  },
  {
    path: "/deposit-withdraw",
    label: "Deposit & Withdraw",
    icon: "/assets/icons/depwith-ic.png",
  },
  {
    path: "https://app.corsafutures.com/",
    label: "cTrader",
    icon: "/assets/icons/tradesignal-ic.png",
  },
  {
    path: "/referrals",
    label: "Referrals",
    icon: "/assets/icons/referrals-ic.png",
  },
  {
    path: "/help",
    label: "Help",
    icon: "/assets/icons/help-ic.png",
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img
          src="/assets/images/corsa-logo-transparent.png"
          alt="Icon"
          className="header-icon"
        />
      </div>

      <div className="sidebar-user-info">
        <UserProfile />
      </div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")} // Use the className prop for better readability
              end
            >
              <img src={item.icon} alt={item.label} className="menu-icon" />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
