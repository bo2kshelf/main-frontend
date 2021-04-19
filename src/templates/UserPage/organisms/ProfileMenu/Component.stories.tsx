import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'UserPage/organisms/ProfileMenu',
  component: Component,
  args: {
    width: 256,
  },
  argTypes: {
    className: {table: {disable: true}},
    picture: {table: {disable: true}},
    width: {control: {type: 'range', min: 256, max: 512, step: 8}},
  },
  decorators: [
    (Story, {args}) => (
      <div style={{width: args.width}}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {
  displayName: 'User Name',
  userName: 'username',
  picture: random.icon(),
  recordsCount: 16,
  readingBooksCount: 29,
  readBooksCount: 95,
  haveBooksCount: 54,
  stackedBooksCount: 12,
  wishReadBooksCount: 9,
};
