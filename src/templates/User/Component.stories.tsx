import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {TemplateDecolator} from '~~/.storybook/TemplateDecolator';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateUser',
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

export const NewUser: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
NewUser.args = {
  displayName: 'New User',
  userName: 'newbie',
  picture: random.icon(),
  records: {count: 0, hasNext: false, skip: 0, limit: 0, nodes: []},
  readingBooks: {count: 0, hasNext: false, books: []},
  likedBooks: {count: 0, hasNext: false, books: []},
  readBooks: {count: 0},
  haveBooks: {count: 0},
  stackedBooks: {count: 0},
  wishBooks: {count: 0},
};
NewUser.storyName = '新しいユーザー';

export const NormalUser: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
NormalUser.args = {
  displayName: 'Normal User',
  userName: 'normal',
  picture: random.icon(),
  records: {
    count: 30,
    hasNext: true,
    skip: 0,
    limit: 0,
    nodes: Array.from({length: 5}).map((_, i) => ({
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
  },
  readingBooks: {
    count: 10,
    hasNext: true,
    books: Array.from({length: 8}).map((_, i) => ({
      id: `${i}`,
      title: `Book ${i}`,
      cover: random.bookcover(i),
    })),
  },
  likedBooks: {
    count: 10,
    hasNext: true,
    books: Array.from({length: 8}).map((_, i) => ({
      id: `${i}`,
      title: `Book ${i}`,
      cover: random.bookcover(i),
    })),
  },
  readBooks: {count: 30},
  haveBooks: {count: 40},
  stackedBooks: {count: 10},
  wishBooks: {count: 5},
};
NormalUser.storyName = '一般的なユーザー';
