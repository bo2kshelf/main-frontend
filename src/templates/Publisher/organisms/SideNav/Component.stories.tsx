import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplatePublisher/organisms/SideNav',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    cover: {table: {disable: true}},
    authors: {table: {disable: true}},
    publishers: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-80')} />
);
Primary.args = {
  name: 'サンプル出版社',
};
