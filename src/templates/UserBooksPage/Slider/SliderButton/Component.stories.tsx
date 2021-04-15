import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {
  ComponentProps,
  NextButtonComponent,
  PreviousButtonComponent,
} from './Component';

export default {
  title: 'UserBookPage/Slider/Button/Component',
  args: {
    link: {
      pathname: '/',
      query: {username: 'sno2wman', number: 1},
    },
  },
} as Meta;

export const Privous: Story<ComponentProps> = (args) => (
  <PreviousButtonComponent {...args} className={clsx('w-32')} />
);

export const Next: Story<ComponentProps> = (args) => (
  <NextButtonComponent {...args} className={clsx('w-32')} />
);
