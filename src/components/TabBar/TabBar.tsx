import React, { useState } from "react";

import { Tab, TabProps } from "../Tab/Tab";
import "./tabBar.css";

export interface TabBarProps {
  tabs: TabProps[];
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
}

export const TabBar = ({ tabs, backgroundColor, size }: TabBarProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <nav
        style={{ backgroundColor }}
        className={["tabBar", `tabBar--${size}`].join(" ")}
      >
        {tabs.map((tab, index) => (
          <Tab
            title={tab.title}
            key={`${tab.title}${index}`}
            active={activeTab === index}
            setActive={() => setActiveTab(index)}
          />
        ))}
      </nav>
      <h5 className="tabCaption" style={{ padding: "0 5px" }}>
        {tabs[activeTab].caption}
      </h5>
    </>
  );
};
