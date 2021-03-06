import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {TemplateDecolator} from '~~/.storybook/TemplateDecolator';
import {Component, ComponentProps} from './TemplateRead';

export default {
  title: 'TemplateReadBooks',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    picture: {table: {disable: true}},
    books: {table: {disable: true}},
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
  books: Array.from({length: 32}).map((_, i) => ({
    id: `${i}`,
    title: `Book ${i}`,
    cover: random.bookcover(i),
  })),
  booksCount: 64,
  pageNumber: 1,
  records: {count: 10},
  haveBooks: {count: 10},
  readBooks: {count: 64},
  readingBooks: {count: 10},
  stackedBooks: {count: 10},
  wishBooks: {count: 10},
  likedBooks: {count: 10},
};
NormalUser.storyName = '一般的なユーザー';
