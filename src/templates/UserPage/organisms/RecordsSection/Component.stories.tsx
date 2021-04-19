import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'UserPage/organisms/RecordsSection',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    records: {table: {disable: true}},
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
  records: Array.from({length: 5}).map((_, i) => ({
    id: `${i}`,
    user: {
      displayName: 'Normal User',
      userName: 'normal',
      picture: random.icon(),
    },
    book: {
      id: `${i}`,
      title: `Title ${i}`,
      subtitle: `subtitle ${i}`,
      cover: random.bookcover(i),
    },
    readAt: '2012-12-25',
  })),
};
Full.storyName = '5冊以上ある';

export const Lack: Story<ComponentProps> = (args) => (
  <div style={{width: 800}}>
    <Component {...args} />
  </div>
);
Lack.args = {
  displayName: 'User Name',
  userName: 'username',
  hasMore: false,
  records: Array.from({length: 2}).map((_, i) => ({
    id: `${i}`,
    user: {
      displayName: 'Normal User',
      userName: 'normal',
      picture: random.icon(),
    },
    book: {
      id: `${i}`,
      title: `Title ${i}`,
      subtitle: `subtitle ${i}`,
      cover: random.bookcover(i),
    },
    readAt: '2012-12-25',
  })),
};
Lack.storyName = '5冊以内';

export const Empty: Story<ComponentProps> = (args) => (
  <div style={{width: 800}}>
    <Component {...args} />
  </div>
);
Empty.args = {
  displayName: 'User Name',
  userName: 'username',
  hasMore: false,
  records: [],
};
Empty.storyName = '1冊も無い';
