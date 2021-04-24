import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateSeries/organisms/SideNav',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    authors: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-80')} />
);
Primary.args = {
  title: 'サンプルシリーズ',
  authors: Array.from({length: 2}).map((_, i) => ({
    id: `${i}`,
    name: `サンプル著者(${i + 1})`,
  })),
};
