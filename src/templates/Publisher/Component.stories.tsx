import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {TemplateDecolator} from '~~/.storybook/TemplateDecolator';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplatePublisher',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    books: {table: {disable: true}},
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
  id: '1',
  name: 'サンプル出版社',
  books: Array.from({length: 16}).map((_, i) => ({
    id: `${i}`,
    title: `サンプルタイトル(${i + 1})`,
    cover: random.bookcover(i),
  })),
};
