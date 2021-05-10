import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {random} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'organisms/HeaderNav',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    userLoading: {table: {disable: true}},
    userLoggedIn: {table: {disable: true}},
    currentUser: {table: {disable: true}},
  },
} as Meta;

export const Loading: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full', 'h-24')} />
);
Loading.args = {
  userLoading: true,
};
Loading.storyName = 'ユーザーローディグ中';

export const UnloggedIn: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full', 'h-24')} />
);
UnloggedIn.args = {
  userLoading: false,
  signedIn: false,
};
UnloggedIn.storyName = '未ログイン';

export const LoggedIn: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full', 'h-24')} />
);
LoggedIn.args = {
  userLoading: false,
  signedIn: true,
  currentUser: {
    userName: 'INTERNET_EXPLORER',
    displayName: 'IAMTHEKIDYOUKNOWWHATIMEAN',
    picture: random.icon(),
  },
};
LoggedIn.storyName = 'ログイン済み';
