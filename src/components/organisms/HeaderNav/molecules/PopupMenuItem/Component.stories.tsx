import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {
  ComponentProps,
  ItemHaveBooksComponent,
  ItemLogoutComponent,
  ItemReadBooksComponent,
  ItemReadingBooksComponent,
  ItemReadRecordsComponent,
  ItemSettingsComponent,
  ItemStackedBooksComponent,
  ItemWishReadBooksComponent,
} from './Component';

export default {
  title: 'organisms/HeaderNav/molecules/PopupMenuItem',
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const ReadRecords: Story<ComponentProps> = (args) => (
  <ItemReadRecordsComponent
    {...args}
    className={clsx('w-80', 'justify-center')}
  />
);
ReadRecords.storyName = '読んだ記録';

export const ReadBooks: Story<ComponentProps> = (args) => (
  <ItemReadBooksComponent {...args} className={clsx('w-40')} />
);
ReadBooks.storyName = '読んだ本';

export const ReadingBooks: Story<ComponentProps> = (args) => (
  <ItemReadingBooksComponent {...args} className={clsx('w-40')} />
);
ReadingBooks.storyName = '読んでいる本';

export const WishReadBooks: Story<ComponentProps> = (args) => (
  <ItemWishReadBooksComponent {...args} className={clsx('w-40')} />
);
WishReadBooks.storyName = '読みたい本';

export const StackedBooks: Story<ComponentProps> = (args) => (
  <ItemStackedBooksComponent {...args} className={clsx('w-40')} />
);
StackedBooks.storyName = '積んでいる本';

export const HaveBooks: Story<ComponentProps> = (args) => (
  <ItemHaveBooksComponent {...args} className={clsx('w-40')} />
);
HaveBooks.storyName = '持っている本';

export const Logout: Story<ComponentProps> = (args) => (
  <ItemSettingsComponent {...args} className={clsx('w-40')} />
);
Logout.storyName = 'ログアウト';

export const Settings: Story<ComponentProps> = (args) => (
  <ItemLogoutComponent {...args} className={clsx('w-40')} />
);
Settings.storyName = '設定';
