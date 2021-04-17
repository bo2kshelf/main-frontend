import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Bookpage/organisms/SideNav',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    cover: {table: {disable: true}},
    authors: {table: {disable: true}},
    publishers: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-80')} />
);
Primary.args = {
  title: 'サンプルタイトル(1)',
  subtitle: 'サンプルサブタイトル',
  cover: random.bookcover(0),
  isbn: '9784832272460',
  authors: [{id: '1', name: 'サンプル著者'}],
  publishers: [{id: '1', name: 'サンプル出版社'}],
  pages: 256,
  languages: '日本語',
  publishedAt: '2020-05-12',
};
