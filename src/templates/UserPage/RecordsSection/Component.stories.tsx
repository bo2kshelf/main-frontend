import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {icons, random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'UserPage/RecordsSection',
  component: Component,
  args: {
    width: 704,
  },
  argTypes: {
    className: {table: {disable: true}},
    books: {table: {disable: true}},
    hasMore: {table: {disable: true}},
    empty: {table: {disable: true}},
    width: {control: {type: 'range', min: 704, max: 1024, step: 8}},
  },
  decorators: [
    (Story, {args}) => (
      <div style={{width: args.width}}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Full: Story<ComponentProps> = (args) => <Component {...args} />;
Full.args = {
  displayName: 'User Name',
  userName: 'username',
  hasMore: true,
  records: Array.from({length: 5}).map((_, i) => ({
    id: `${i}`,
    user: {
      displayName: 'Normal User',
      userName: 'normal',
      picture: icons[1],
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

export const Lack: Story<ComponentProps> = (args) => <Component {...args} />;
Lack.args = {
  displayName: 'User Name',
  userName: 'username',
  hasMore: false,
  records: Array.from({length: 2}).map((_, i) => ({
    id: `${i}`,
    user: {
      displayName: 'Normal User',
      userName: 'normal',
      picture: icons[1],
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

export const Empty: Story<ComponentProps> = (args) => <Component {...args} />;
Empty.args = {
  displayName: 'User Name',
  userName: 'username',
  hasMore: false,
  records: [],
};
Empty.storyName = '1冊も無い';
