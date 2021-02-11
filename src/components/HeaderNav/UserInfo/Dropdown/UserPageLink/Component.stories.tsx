import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {
  HaveBooksLinkComponent,
  ReadBooksLinkComponent,
  ReadingBooksLinkComponent,
  StackedBooksLinkComponent,
  UserPageComponentProps,
  WishReadBooksLinkComponent,
} from './Component';

export default {
  title: 'HeaderNav/UserInfo/Dropdown/UserPageLink/Component',
  argTypes: {
    className: {table: {disable: true}},
  },
  decorators: [
    (Story) => (
      <div className={clsx('flex')}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const ReadBooks: Story<UserPageComponentProps> = (args) => (
  <ReadBooksLinkComponent {...args} className={clsx()} />
);
ReadBooks.storyName = '読んだ本';
ReadBooks.args = {
  link: '/users/SnO2WMaN/read',
};

export const ReadingBooks: Story<UserPageComponentProps> = (args) => (
  <ReadingBooksLinkComponent {...args} className={clsx()} />
);
ReadingBooks.storyName = '読んでいる本';
ReadingBooks.args = {
  link: '/users/SnO2WMaN/reading',
};

export const WishReadBooks: Story<UserPageComponentProps> = (args) => (
  <WishReadBooksLinkComponent {...args} className={clsx()} />
);
WishReadBooks.storyName = '読みたい本';
WishReadBooks.args = {
  link: '/users/SnO2WMaN/wish',
};

export const StackedBooks: Story<UserPageComponentProps> = (args) => (
  <StackedBooksLinkComponent {...args} className={clsx()} />
);
StackedBooks.storyName = '積んでいる本';
StackedBooks.args = {
  link: '/users/SnO2WMaN/stacked',
};

export const HaveBooks: Story<UserPageComponentProps> = (args) => (
  <HaveBooksLinkComponent {...args} className={clsx()} />
);
HaveBooks.storyName = '持っている本';
HaveBooks.args = {
  link: '/users/SnO2WMaN/have',
};
