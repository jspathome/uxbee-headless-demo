import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UIPageTitle from './UIPageTitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'uxbee/Atoms/PageTitle',
  component: UIPageTitle,
  //More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} as ComponentMeta<typeof UIPageTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UIPageTitle> = (args) => <UIPageTitle {...args} />;

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  title: 'This is a nice Title',
};

