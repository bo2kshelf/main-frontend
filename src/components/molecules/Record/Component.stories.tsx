import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'molecules/Record',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('h-full')} />
);
Primary.args = {
  id: '0',
  readAt: '2020-07-12',
  user: {
    displayName: 'User Name',
    userName: 'username',
    picture: random.icon(),
  },
  book: {
    id: '0',
    title: 'Title',
    subtitle: 'Subtitle',
    cover: random.bookcover(),
  },
};
