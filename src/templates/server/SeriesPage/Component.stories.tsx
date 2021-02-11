import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/layout/PageLayout';
import {placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'SeriesPage/Component',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'とある科学の超電磁砲',
    relatedAuthors: [
      {author: {id: 'A', name: '冬月基'}},
      {author: {id: 'B', name: '鎌池和馬'}},
      {author: {id: 'C', name: 'はいむらきよたか'}},
    ],
    parts: [...Array.from({length: 10})].map((_, i) => ({
      book: {
        id: i,
        title: `book (${i})`,
        cover: placeholder['210x297'],
      },
    })),
  },
  argTypes: {
    className: {table: {disable: true}},
    title: {table: {disable: true}},
    relatedAuthors: {table: {disable: true}},
    parts: {table: {disable: true}},
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
