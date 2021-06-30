import React from 'react';
import { Story, Meta } from '@storybook/react';

import Icon, { IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Logo = Template.bind({});
Logo.args = {
  name: 'logo',
  size: '48px',
  color: '#61dafb',
};
