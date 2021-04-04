import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/layout/PageLayout';
import {icons, placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'UserBookPage/Component',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {table: {disable: true}},
    user: {table: {disable: true}},
    records: {table: {disable: true}},
    skip: {table: {disable: true}},
    limit: {table: {disable: true}},
    count: {table: {disable: true}},
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
  user: {
    userName: 'INTERNET_EXPLORER',
    displayName: 'IAMTHEKIDYOUKNOWWHATIMEAN',
    picture: icons[0],
  },
  count: 64,
  records: [...Array.from({length: 12 * 3})].map((_, i) => ({
    book: {
      id: `${i + 1}`,
      title: `SAMPLE (${i + 1})`,
      cover: placeholder['210x297'],
    },
  })),
  previousLink: {
    pathname: '/users/[username]/have',
    query: {username: 'INTERNET_EXPLORER', number: 3},
  },
  nextLink: {
    pathname: '/users/[username]/have',
    query: {username: 'INTERNET_EXPLORER', number: 4},
  },
};
