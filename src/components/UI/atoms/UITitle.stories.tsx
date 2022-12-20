import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UITitle } from './UITitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'uxbee/Atoms/Title',
  component: UITitle,
  //More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UITitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UITitle> = (args) => <UITitle {...args} />;

export const h1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
h1.args = {
  Type: 'h1',
  Text: 'This is a nice Title',
};

export const h2 = Template.bind({});
h2.args = {
  Type: 'h2',
  Text: 'This is a nice Title',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
