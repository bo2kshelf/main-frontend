import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {AuthorRole} from '~/lib/AuthorRole';
import {random} from '~~/.storybook/assets';
import {TemplateDecolator} from '~~/.storybook/TemplateDecolator';
import {Component, ComponentProps} from './Component';

export default {
  title: 'BookPage',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    cover: {table: {disable: true}},
    authors: {table: {disable: true}},
    publishers: {table: {disable: true}},
    series: {table: {disable: true}},
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

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
Primary.args = {
  title: 'サンプルタイトル',
  subtitle: 'サンプルサブタイトル',
  cover: random.bookcover(0),
  isbn: '9784832272460',
  publishedAt: '2020-05-12',
  pages: 256,
  languages: '日本語',
  authors: [
    {
      id: '1',
      name: 'サンプル著者',
      roles: [AuthorRole.Author],
      books: Array.from({length: 8}).map((_, i) => ({
        id: `${i}`,
        title: 'サンプルタイトル(2)',
        cover: random.bookcover(i + 1),
      })),
    },
  ],
  publishers: [
    {
      id: '1',
      name: 'サンプル出版社',
      books: Array.from({length: 8}).map((_, i) => ({
        id: `${i}`,
        title: 'サンプルタイトル(2)',
        cover: random.bookcover(i + 1),
      })),
    },
  ],
  series: [
    {
      id: '1',
      title: 'サンプルシリーズ',
      books: Array.from({length: 8}).map((_, i) => ({
        id: `${i}`,
        title: 'サンプルタイトル(2)',
        cover: random.bookcover(i + 1),
      })),
    },
  ],
};
