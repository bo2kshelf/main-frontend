import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {TemplateDecolator} from '~~/.storybook/TemplateDecolator';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateSeries',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    books: {table: {disable: true}},
    relatedBooks: {table: {disable: true}},
    authors: {table: {disable: true}},
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
  id: '1',
  title: 'サンプルシリーズ',
  books: Array.from({length: 16}).map((_, i) => ({
    id: `${i}`,
    title: `サンプルタイトル(${i + 1})`,
    cover: random.bookcover(i),
  })),
  relatedBooks: Array.from({length: 4}).map((_, i) => ({
    id: `${i}`,
    title: `サンプルタイトル(${i + 1})`,
    cover: random.bookcover(i),
  })),
  authors: Array.from({length: 2}).map((_, i) => ({
    id: `${i}`,
    name: `サンプル著者(${i + 1})`,
  })),
};
