import React from "react";
import "./SettingsSecurityTab.css"; // Import the CSS file for styling

const SettingsSecurityTab: React.FC = () => {
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
      <h4>Email</h4>
      <div className="email-change">
        <p>example04@gmail.com</p>
        <button className="change-button">Change</button>
      </div>
    </div>
  );
};

export default SettingsSecurityTab;
