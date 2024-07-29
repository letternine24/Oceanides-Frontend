// SettingsSecurityTab.js

import React from "react";
import "./SettingsSecurityTab.css"; // Import the CSS file for styling

const SettingsSecurityTab = () => {
  return (
    <div className="settings-security-tab">
      <h4>Manage Password</h4>
      <div className="password-change">
        <p>Current Password</p>
        <div className="password-change-field">
          <input type="password" value="**********" disabled />
          <button className="change-button">Change</button>
        </div>
      </div>
      <h2>Email</h2>
      <div className="email-change">
        <p>example04@gmail.com</p>
        <button className="change-button">Change</button>
      </div>
    </div>
  );
};

export default SettingsSecurityTab;
