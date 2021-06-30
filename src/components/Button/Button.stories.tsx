import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    title: 'Button',
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Button',
};
