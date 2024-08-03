import React from "react";
import ProfileTab from "./modules/Tabs/ProfileTab";
import FinancialInformationTab from "./modules/Tabs/FinancialInformationTab";
import SettingsSecurityTab from "./modules/Tabs/SettingsSecurityTab";
import LegalTab from "./modules/Tabs/LegalTab";
import ReferralForm from "./modules/ReferralForm/ReferralForm";

const Profile = () => {
  return (
    <main className="main-content">
      {/* Main content area */}
      <div className="content">
        {/* <ProfileDetails /> */}

        {/* Tabs */}
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Financial Information
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Settings & Security
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="disabled-tab"
              data-bs-toggle="tab"
              data-bs-target="#disabled-tab-pane"
              type="button"
              role="tab"
              aria-controls="disabled-tab-pane"
              aria-selected="false"
            >
              Legal
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <ProfileTab />
          </div>
          <div
            class="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <FinancialInformationTab />
          </div>
          <div
            class="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            <SettingsSecurityTab />
          </div>
          <div
            class="tab-pane fade"
            id="disabled-tab-pane"
            role="tabpanel"
            aria-labelledby="disabled-tab"
            tabindex="0"
          >
            <LegalTab />
          </div>
        </div>

        <ReferralForm />
      </div>
    </main>
  );
};

export default Profile;
