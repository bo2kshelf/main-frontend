import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {TemplateDecolator} from '~~/.storybook/TemplateDecolator';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateUserRecords',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    picture: {table: {disable: true}},
    records: {table: {disable: true}},
    readBooks: {table: {disable: true}},
    readingBooks: {table: {disable: true}},
    likedBooks: {table: {disable: true}},
    haveBooks: {table: {disable: true}},
    stackedBooks: {table: {disable: true}},
    wishBooks: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <TemplateDecolator>
        <Story />
      </TemplateDecolator>
    ),
  ],
} as Meta;

export const NormalUser: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
NormalUser.args = {
  displayName: 'Normal User',
  userName: 'normal',
  picture: random.icon(),
  records: Array.from({length: 10}).map((_, i) => ({
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
  count: 10,
  readingBooks: {count: 10},
  likedBooks: {count: 10},
  readBooks: {count: 30},
  haveBooks: {count: 40},
  stackedBooks: {count: 10},
  wishBooks: {count: 5},
};
NormalUser.storyName = '一般的なユーザー';
