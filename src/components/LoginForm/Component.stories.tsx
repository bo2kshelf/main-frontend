import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Component, ComponentProps} from './Component';
import {GitHubButton, GoogleButton, TwitterButton} from './LoginButton';

export default {
  title: 'LoginForm/Component',
  component: Component,
  args: {
    githubUrl: 'https://github.com/login',
  },
  argTypes: {
    className: {table: {disable: true}},
  },
  decorators: [
    (Story) => {
      return (
        <div className={clsx('flex')}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx()}>
    <GitHubButton className={clsx('w-full')} url="/" />
    <TwitterButton className={clsx('w-full')} url="/" />
    <GoogleButton className={clsx('w-full')} url="/" />
  </Component>
);
