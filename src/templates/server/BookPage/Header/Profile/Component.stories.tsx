import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Bookpage/Header/Profile/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    book: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
Primary.args = {
  book: {
    title: 'Sample',
    isbn: '9784774142043',
    publisher: '小学館',
    pages: 192,
    date: '2020年11月7日',
    language: '日本語',
    authors: [
      {
        id: '1',
        name: 'Author',
        roles: ['原作'],
      },
    ],
  },
};
