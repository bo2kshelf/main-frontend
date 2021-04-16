import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'organisms/LoginForm/molecules/LoginButton',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    disabled: {table: {disable: true}},
  },
} as Meta;

export const Active: Story<ComponentProps> = (args) => <Component {...args} />;
Active.args = {
  disabled: false,
};

export const Disabled: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
Disabled.args = {
  disabled: true,
};
