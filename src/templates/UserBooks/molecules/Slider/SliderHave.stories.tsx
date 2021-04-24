import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './SliderHave';

export default {
  title: 'TemplateUserHave/molecules/Slider',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx()} />
);
Primary.args = {
  userName: 'normal',
  leftest: true,
  left: 2,
  right: 4,
  rightest: 5,
};
Primary.storyName = '一般的なユーザー';
