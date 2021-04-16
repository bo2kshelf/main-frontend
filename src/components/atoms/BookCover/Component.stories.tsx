import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'common/BookCover',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    cover: {table: {disable: true}},
  },
  decorators: [
    (Story) => (
      <div className={clsx('w-48', 'h-48')}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const HaveCover: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('h-full')} />
);
HaveCover.args = {
  cover: placeholder['210x297'],
};
HaveCover.storyName = '画像がある';

export const NoCoverWithTitleOnly: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('h-full')} />
);
NoCoverWithTitleOnly.args = {
  title: '闇の自己啓発',
};
NoCoverWithTitleOnly.storyName = '画像がなく、タイトルのみ';

export const NoCoverWithTitleAndSubtitle: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('h-full')} />
);
NoCoverWithTitleAndSubtitle.args = {
  title: 'ダークウェブ・アンダーグラウンド',
  subtitle: '社会秩序を逸脱するネット暗部の住人たち',
};
NoCoverWithTitleAndSubtitle.storyName = '画像がなく、サブタイトルがある';
