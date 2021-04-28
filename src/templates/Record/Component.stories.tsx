import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {AuthorRole} from '~/lib/AuthorRole';
import {random} from '~~/.storybook/assets';
import {TemplateDecolator} from '~~/.storybook/TemplateDecolator';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateRecord',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    picture: {table: {disable: true}},
    user: {table: {disable: true}},
    book: {table: {disable: true}},
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
  id: 'record1',
  readAt: '2005-05-14',
  count: 2,
  review: 'ここにはレビューが入ります。',
  book: {
    id: '1',
    title: 'サンプルタイトル',
    subtitle: 'サンプルサブタイトル',
    cover: random.bookcover(),
    isbn: '9784832272460',
    publishedAt: '2020-05-12',
    pages: 256,
    languages: '日本語',
    authors: [
      {
        id: '1',
        name: 'サンプル著者',
        roles: [AuthorRole.Author],
      },
    ],
  },
  user: {
    displayName: 'New User',
    uniqueName: 'normal',
    picture: random.icon(),
  },
};
