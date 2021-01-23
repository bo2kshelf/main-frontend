import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {icons} from '~~/.storybook/assets';
import {ComponentProps, PlainComponent} from './Component';

export default {
  title: 'UserPage/ProfileSection/Component',
  component: PlainComponent,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    userName: 'INTERNET_EXPLORER',
    displayName: 'IAMTHEKIDYOUKNOWWHATIMEAN',
    picture: icons[0],
  },
  argTypes: {
    className: {table: {disable: true}},
    picture: {table: {disable: true}},
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <PlainComponent {...args} className={clsx('w-full')} />
);
