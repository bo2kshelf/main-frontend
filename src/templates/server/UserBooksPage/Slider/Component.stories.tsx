import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/layout/PageLayout';
import {Component, ComponentProps} from './Component';

export default {
  title: 'UserBookPage/Slider/Component',
  component: Component,
  args: {
    previousLink: {
      pathname: '/users/[username]/have',
      query: {username: 'sno2wman', number: 1},
    },
    nextLink: {
      pathname: '/users/[username]/have',
      query: {username: 'sno2wman', number: 1},
    },
  },
  argTypes: {
    className: {table: {disable: true}},
    i18n: {table: {disable: true}},
    previousLink: {table: {disable: true}},
    nextLink: {table: {disable: true}},
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
  total: 120,
  from: 0,
  to: 60,
  previousLink: {
    pathname: '/users/[username]/have',
    query: {username: 'sno2wman', number: 1},
  },
  nextLink: {
    pathname: '/users/[username]/have',
    query: {username: 'sno2wman', number: 1},
  },
};
