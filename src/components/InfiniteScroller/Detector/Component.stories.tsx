import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'InfiniteScroller/Detector/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    loading: {table: {disable: true}},
  },
} as Meta;

export const Loading: Story<ComponentProps> = (args) => <Component {...args} />;
Loading.args = {
  loading: true,
};

export const Waiting: Story<ComponentProps> = (args) => <Component {...args} />;
Waiting.args = {
  loading: false,
};
