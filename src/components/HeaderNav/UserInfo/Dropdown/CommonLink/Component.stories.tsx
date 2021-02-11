import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {ComponentProps, LogoutLink, SettingsLink} from './Component';

export default {
  title: 'HeaderNav/UserInfo/Dropdown/CommonLink/Component',
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

export const Logout: Story<ComponentProps> = (args) => (
  <SettingsLink {...args} className={clsx()} />
);
Logout.storyName = 'ログアウト';

export const Settings: Story<ComponentProps> = (args) => (
  <LogoutLink {...args} className={clsx()} />
);
Settings.storyName = '設定';
