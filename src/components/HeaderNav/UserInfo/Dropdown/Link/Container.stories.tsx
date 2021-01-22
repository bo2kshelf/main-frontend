import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {
  LogoutLink,
  ReadBooksLink,
  ReadingBooksLink,
  SettingsLink,
} from './Container';

export default {
  title: 'HeaderNav/UserInfo/Dropdown/Link/Container',
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

export const Logout: Story = (args) => (
  <SettingsLink {...args} className={clsx()} />
);

export const ReadBooks: Story = (args) => (
  <ReadingBooksLink {...args} className={clsx()} />
);

export const ReadingBooks: Story = (args) => (
  <ReadBooksLink {...args} className={clsx()} />
);

export const Settings: Story = (args) => (
  <LogoutLink {...args} className={clsx()} />
);
