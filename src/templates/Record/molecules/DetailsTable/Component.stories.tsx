import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateRecord/molecules/DetailsTable',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    readAt: {table: {disable: true}},
    book: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {
  count: 2,
  book: {
    id: 'book1',
    title: 'サンプルタイトル 1',
    subtitle: 'サンプルサブタイトル 1',
  },
  readAt: '2021-01-21',
};
