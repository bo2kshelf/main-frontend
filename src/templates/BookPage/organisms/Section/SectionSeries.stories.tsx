import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './SectionSeries';

export default {
  title: 'Bookpage/organisms/SectionSeries',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    books: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <div style={{width: 800}}>
    <Component {...args} />
  </div>
);
Primary.args = {
  id: '1',
  title: 'サンプルシリーズ',
  books: Array.from({length: 8}).map((_, i) => ({
    id: `${i}`,
    title: `サンプルタイトル (${i})`,
    cover: random.bookcover(i + 1),
  })),
};
