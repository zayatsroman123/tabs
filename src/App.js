import React from "react";

import { TabBar } from "./components/TabBar/TabBar";
import { defaultTabsArr } from "./constants";
import "./styles.css";

export default function App() {
  return <TabBar tabs={defaultTabsArr} />;
}
