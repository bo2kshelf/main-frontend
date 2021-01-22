import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {icons} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'HeaderNav/UserInfo/Dropdown/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
  },
  decorators: [
    (Story) => (
      <div className={clsx('flex')}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <div className={clsx('flex')}>
    <Component {...args} className={clsx()} />
  </div>
);
Primary.args = {
  userName: 'INTERNET_EXPLORER',
  displayName: 'IAMTHEKIDYOUKNOWWHATIMEAN',
  picture: icons[0],
};
