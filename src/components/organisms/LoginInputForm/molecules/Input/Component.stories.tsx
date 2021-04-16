import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {ComponentProps, PasswordInput, UsernameInput} from './Component';

export default {
  title: 'organisms/LoginForm/molecules/Input',
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Username: Story<ComponentProps> = (args) => (
  <UsernameInput {...args} className={clsx('w-80')} />
);

export const Password: Story<ComponentProps> = (args) => (
  <PasswordInput {...args} className={clsx('w-80')} />
);
