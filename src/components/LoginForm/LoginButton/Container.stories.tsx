import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {
  ContainerProps,
  GitHubLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from './Container';

export default {
  title: 'LoginForm/LoginButton/Container',
  args: {
    className: clsx('w-64'),
    url: '/',
  },
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const GitHub: Story<ContainerProps> = (args) => (
  <GitHubLoginButton {...args} />
);
GitHub.storyName = 'GitHub';

export const Twitter: Story<ContainerProps> = (args) => (
  <TwitterLoginButton {...args} />
);
Twitter.storyName = 'Twitter';

export const Google: Story<ContainerProps> = (args) => (
  <GoogleLoginButton {...args} />
);
Google.storyName = 'Google';
