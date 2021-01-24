import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Bookpage/Header/Profile/Details/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    details: {table: {disable: true}},
  },
  decorators: [
    (Story) => (
      <div className={clsx('flex')}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {
  details: {
    isbn: '9784764905870',
    publisher: '小学館',
    pages: 192,
    date: '2020年11月7日',
    language: '日本語',
  },
};
