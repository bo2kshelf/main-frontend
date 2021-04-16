import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/layout/PageLayout';
import {placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Bookpage/Header/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    book: {table: {disable: true}},
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
  book: {
    title: 'Sample',
    cover: placeholder['210x297'],
    authors: [
      {
        id: '1',
        name: 'Author',
        roles: ['原作'],
      },
    ],
    isbn: '9784764905870',
    publishers: [{id: 'A', name: '小学館'}],
  },
};
