import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateBook/molecules/DetailsTable',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    publishers: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-80')} />
);
Primary.args = {
  isbn: '9784832272460',
  publishers: [{id: '1', name: 'サンプル出版社'}],
  pages: 256,
  languages: '日本語',
  publishedAt: '2020-05-12',
};
