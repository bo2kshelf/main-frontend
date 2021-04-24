import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {
  ComponentProps,
  HaveBooksComponent,
  LikedBooksComponent,
  ReadBooksComponent,
  ReadingBooksComponent,
  ReadRecordsComponent,
  StackedBooksComponent,
  WishReadBooksComponent,
} from './Component';

export default {
  title: 'TemplateUser/molecules/MenuItem',
  args: {count: 20},
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const ReadingBooks: Story<ComponentProps> = (args) => (
  <ReadingBooksComponent {...args} className={clsx('w-80')} />
);

export const HaveBooks: Story<ComponentProps> = (args) => (
  <HaveBooksComponent {...args} className={clsx('w-80')} />
);

export const ReadBooks: Story<ComponentProps> = (args) => (
  <ReadBooksComponent {...args} className={clsx('w-80')} />
);

export const ReadRecords: Story<ComponentProps> = (args) => (
  <ReadRecordsComponent {...args} className={clsx('w-80')} />
);
export const StackedBooks: Story<ComponentProps> = (args) => (
  <StackedBooksComponent {...args} className={clsx('w-80')} />
);

export const WishReadBooks: Story<ComponentProps> = (args) => (
  <WishReadBooksComponent {...args} className={clsx('w-80')} />
);
export const LikedBooks: Story<ComponentProps> = (args) => (
  <LikedBooksComponent {...args} className={clsx('w-80')} />
);
