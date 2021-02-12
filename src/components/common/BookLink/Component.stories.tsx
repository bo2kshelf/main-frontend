import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps, PlainComponent} from './Component';

export default {
  title: 'common/BookLink/Component',
  component: PlainComponent,
  args: {
    link: '/books/1',
    title: 'sample',
  },
  argTypes: {
    className: {table: {disable: true}},
    cover: {table: {disable: true}},
  },
  decorators: [
    (Story) => (
      <div className={clsx('flex')}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const HaveCover: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-48', 'h-48')} />
);
HaveCover.args = {
  cover: placeholder['210x297'],
};
HaveCover.storyName = '画像がある';

export const NoCover: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-48', 'h-48')} />
);
NoCover.args = {};
NoCover.storyName = '画像がない';
