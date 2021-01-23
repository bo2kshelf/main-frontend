import {faCogs} from '@fortawesome/free-solid-svg-icons';
import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'HeaderNav/UserInfo/Dropdown/Link/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    icon: {table: {disable: true}},
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
  <Component {...args} className={clsx()} />
);
Primary.args = {
  link: '/settings',
  icon: faCogs,
  text: '設定',
};
