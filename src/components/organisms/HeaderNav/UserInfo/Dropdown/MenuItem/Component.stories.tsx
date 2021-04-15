import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {
  ComponentProps,
  ItemHaveBooksComponent,
  ItemLogoutComponent,
  ItemReadBooksComponent,
  ItemReadingBooksComponent,
  ItemSettingsComponent,
  ItemStackedBooksComponent,
  ItemWishReadBooksComponent,
} from './Component';

export default {
  title: 'organisms/HeaderNav/UserInfo/DropDown/MenuItem',
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

export const ReadBooks: Story<ComponentProps> = (args) => (
  <ItemReadBooksComponent {...args} className={clsx()} />
);
ReadBooks.storyName = '読んだ本';

export const ReadingBooks: Story<ComponentProps> = (args) => (
  <ItemReadingBooksComponent {...args} className={clsx()} />
);
ReadingBooks.storyName = '読んでいる本';

export const WishReadBooks: Story<ComponentProps> = (args) => (
  <ItemWishReadBooksComponent {...args} className={clsx()} />
);
WishReadBooks.storyName = '読みたい本';

export const StackedBooks: Story<ComponentProps> = (args) => (
  <ItemStackedBooksComponent {...args} className={clsx()} />
);
StackedBooks.storyName = '積んでいる本';

export const HaveBooks: Story<ComponentProps> = (args) => (
  <ItemHaveBooksComponent {...args} className={clsx()} />
);
HaveBooks.storyName = '持っている本';

export const Logout: Story<ComponentProps> = (args) => (
  <ItemSettingsComponent {...args} className={clsx()} />
);
Logout.storyName = 'ログアウト';

export const Settings: Story<ComponentProps> = (args) => (
  <ItemLogoutComponent {...args} className={clsx()} />
);
Settings.storyName = '設定';
