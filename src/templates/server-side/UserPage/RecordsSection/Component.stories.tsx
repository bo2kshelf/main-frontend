import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'UserPage/RecordsSection/Component',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {table: {disable: true}},
    records: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
Primary.args = {
  records: [...new Array(10)].map((_, i) => ({
    book: {
      id: `${i + 1}`,
      title: `SAMPLE (${i + 1})`,
      cover: placeholder['210x297'],
    },
  })),
};
