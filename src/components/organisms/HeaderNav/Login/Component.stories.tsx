import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'HeaderNav/Login/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Loading: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx()} />
);
Loading.args = {};
