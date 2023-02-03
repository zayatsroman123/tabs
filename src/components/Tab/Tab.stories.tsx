import React from "react";

import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import { Tab, TabProps } from "./Tab";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const DefaultTab = Template.bind({});
