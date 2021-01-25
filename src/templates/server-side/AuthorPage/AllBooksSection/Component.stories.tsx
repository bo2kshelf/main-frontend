import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/layout/PageLayout';
import {placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'AuthorPage/AllBooksSection/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    author: {table: {disable: true}},
    books: {table: {disable: true}},
    series: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <PageLayout className={clsx('container', 'mx-auto')}>
        <Story />
      </PageLayout>
    ),
  ],
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
Primary.args = {
  author: {name: 'Author 1'},
  books: [...new Array(10)].map((_, bookId) => ({
    id: `${bookId}`,
    title: `Sample (${bookId})`,
    cover: placeholder['210x297'],
  })),
};
