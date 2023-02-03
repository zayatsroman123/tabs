import React from "react";

import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import { defaultTabsArr } from "../../constants";
import { TabBar, TabBarProps } from "./TabBar";

export default {
  title: "Components/TabBar",
  component: TabBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TabBarProps> = (args) => <TabBar {...args} />;

export const DefaultTabBar = Template.bind({});
DefaultTabBar.args = { tabs: defaultTabsArr };
