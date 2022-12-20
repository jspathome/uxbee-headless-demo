import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UIMenu from './UIMenu';
import { MenuItem } from './MenuItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'uxbee/Molecules/Menu',
  component: UIMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UIMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UIMenu> = (args) => <UIMenu {...args} />;
const items : MenuItem[] = [];

// items.push(new MenuItem("MenuItem1","/"));
// items.push(new MenuItem("MenuItem2","/"));
// items.push(new MenuItem("MenuItem3","/"));
// items.push(new MenuItem("MenuItem4","/"));

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  Items : items
};