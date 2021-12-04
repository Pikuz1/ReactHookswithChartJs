//This file is demo for testing component individually in react storybook
//To run this file direct direct to the local folder of an app and run 'npm run storybook'
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tab, TabProps } from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
} as Meta;

const Template: Story<TabProps> = (args:any) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tab 1',
};
