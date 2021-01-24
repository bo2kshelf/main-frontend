import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {icons, placeholder} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'UserPage/Component',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    user: {
      userName: 'INTERNET_EXPLORER',
      displayName: 'IAMTHEKIDYOUKNOWWHATIMEAN',
      picture: icons[0],
    },
    read: [...new Array(10)].map((_, i) => ({
      book: {
        id: `${i + 1}`,
        title: `SAMPLE (${i + 1})`,
        cover: placeholder['210x297'],
      },
    })),
    reading: [...new Array(10)].map((_, i) => ({
      book: {
        id: `${i + 1}`,
        title: `SAMPLE (${i + 1})`,
        cover: placeholder['210x297'],
      },
    })),
    have: [...new Array(10)].map((_, i) => ({
      book: {
        id: `${i + 1}`,
        title: `SAMPLE (${i + 1})`,
        cover: placeholder['210x297'],
      },
    })),
  },
  argTypes: {
    className: {table: {disable: true}},
    user: {table: {disable: true}},
    read: {table: {disable: true}},
    reading: {table: {disable: true}},
    have: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
