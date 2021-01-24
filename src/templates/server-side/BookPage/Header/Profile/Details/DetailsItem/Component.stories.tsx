import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component as DetailsComponent} from '..';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Bookpage/Header/Profile/Details/Item/Component',
  component: Component,
  args: {
    icon: faBuilding,
  },
  argTypes: {
    className: {table: {disable: true}},
    icon: {table: {disable: true}},
  },
  decorators: [
    (Story) => (
      <DetailsComponent>
        <Story />
      </DetailsComponent>
    ),
  ],
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {
  detailKey: 'ページ数',
  detailValue: '192ページ',
};
