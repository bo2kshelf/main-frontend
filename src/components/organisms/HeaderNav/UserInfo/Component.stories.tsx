import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {icons} from '~~/.storybook/assets';
import {Component, ComponentProps, PlainComponent} from './Component';

export default {
  title: 'organisms/HeaderNav/UserInfo',
  component: PlainComponent,
  argTypes: {
    className: {table: {disable: true}},
    loading: {table: {disable: true}},
    data: {table: {disable: true}},
  },
  decorators: [
    (Story) => {
      return (
        <div className={clsx('flex', 'flex-row-reverse')}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

export const Loaded: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx()} />
);
Loaded.args = {
  currentUser: {
    userName: 'INTERNET_EXPLORER',
    displayName: 'IAMTHEKIDYOUKNOWWHATIMEAN',
    picture: icons[0],
  },
};
