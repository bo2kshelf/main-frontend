import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/layout/PageLayout';
import {placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Bookpage/SeriesSection/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    series: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <PageLayout className={clsx('container', 'mx-auto')}>
        <Story />
      </PageLayout>
    ),
  ],
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
Primary.args = {
  series: {
    id: '1',
    title: 'Sample Series',
    books: [...new Array(10)].map((_, i) => ({
      id: `${i + 1}`,
      title: `SAMPLE (${i + 1})`,
      cover: placeholder['210x297'],
    })),
  },
};
