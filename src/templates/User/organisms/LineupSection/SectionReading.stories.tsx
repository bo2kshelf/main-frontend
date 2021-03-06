import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './SectionReading';

export default {
  title: 'TemplateUser/organisms/LineupSection/SectionReading',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    books: {table: {disable: true}},
    hasMore: {table: {disable: true}},
    empty: {table: {disable: true}},
  },
} as Meta;

export const Full: Story<ComponentProps> = (args) => (
  <div style={{width: 800}}>
    <Component {...args} />
  </div>
);
Full.args = {
  displayName: 'User Name',
  userName: 'username',
  hasMore: true,
  books: Array.from({length: 8}).map((_, i) => ({
    id: `${i}`,
    title: `Book ${i}`,
    cover: random.bookcover(i),
  })),
};
Full.storyName = '8冊以上ある';

export const Lack: Story<ComponentProps> = (args) => (
  <div style={{width: 800}}>
    <Component {...args} />
  </div>
);
Lack.args = {
  displayName: 'User Name',
  userName: 'username',
  hasMore: false,
  books: Array.from({length: 6}).map((_, i) => ({
    id: `${i}`,
    title: `Book ${i}`,
    cover: random.bookcover(i),
  })),
};
Lack.storyName = '8冊以内';

export const Empty: Story<ComponentProps> = (args) => (
  <div style={{width: 800}}>
    <Component {...args} />
  </div>
);
Empty.args = {
  displayName: 'User Name',
  userName: 'username',
  hasMore: false,
  books: [],
};
Empty.storyName = '1冊も無い';
