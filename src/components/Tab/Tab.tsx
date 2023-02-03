import React from "react";
import "./tab.css";

export interface TabProps {
  title: string;
  active?: boolean;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  setActive?: () => void;
  caption?: string;
}

export const Tab = ({
  title = "Default Tab",
  active = false,
  size = "medium",
  backgroundColor,
  setActive,
}: TabProps) => {
  const mode = active ? "tab--active" : "tab--inActive";
  return (
    <button
      type="button"
      className={["tab", `tab--${size}`, mode].join(" ")}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={setActive}
    >
      <span>{title}</span>
    </button>
  );
};
