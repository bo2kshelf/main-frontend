import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'organisms/HeaderNav/molecules/PopupMenuProfile',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    picture: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-80')} />
);
Primary.args = {
  userName: 'INTERNET_EXPLORER',
  displayName: 'IAMTHEKIDYOUKNOWWHATIMEAN',
  picture: random.icon(),
};
