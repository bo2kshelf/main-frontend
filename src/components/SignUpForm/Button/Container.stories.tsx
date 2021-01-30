import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Container, ContainerProps} from './Container';

export default {
  title: 'SignUpForm/SignUpButton/Container',
  component: Container,

  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ContainerProps> = (args) => (
  <Container {...args} className={clsx('w-64')} />
);
Primary.args = {
  text: 'ユーザー登録',
};
