import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UILink from './UILink';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'uxbee/Atoms/Link',
  component: UILink,
  //More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'bg-uxbee-black' },
  },
} as ComponentMeta<typeof UILink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UILink> = (args) => <UILink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  Text:"This is a link.",
  HRef:"/",
  Color:"primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  Text:"This is a link.",
  HRef:"/",
  Color:"secundary"
};