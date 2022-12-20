import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UIContextMenu from "./UIContextMenu";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "uxbee/Molecules/ContextMenu",
  component: UIContextMenu,
  //More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "bg-uxbee-black" },
  },
} as ComponentMeta<typeof UIContextMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UIContextMenu> = (args) => (
  <UIContextMenu {...args} />
);

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {};
