import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'organisms/HeaderNav/molecules/PopupMenu',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    currentUser: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <div className={clsx('flex')}>
    <Component {...args} className={clsx('w-80')} />
  </div>
);
Primary.args = {
  currentUser: {
    userName: 'INTERNET_EXPLORER',
    displayName: 'IAMTHEKIDYOUKNOWWHATIMEAN',
    picture: random.icon(),
  },
};
