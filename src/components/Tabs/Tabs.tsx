import { ITabs } from "@/interface/components/Tabs";
import React, { useState } from "react";

const Tabs: React.FC<ITabs> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ul className="nav nav-tabs" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              id={`${tab.id}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}-tab-pane`}
              type="button"
              role="tab"
              aria-controls={`${tab.id}-tab-pane`}
              aria-selected={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${
              activeTab === tab.id ? "show active" : ""
            }`}
            id={`${tab.id}-tab-pane`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
            tabIndex={0}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
