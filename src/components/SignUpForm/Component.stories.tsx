import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {icons} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'SignUpForm/Component',
  component: Component,
  args: {
    githubUrl: 'https://github.com/login',
    className: clsx('w-full', 'max-w-screen-sm'),
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

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {
  picture: icons[0],
};
