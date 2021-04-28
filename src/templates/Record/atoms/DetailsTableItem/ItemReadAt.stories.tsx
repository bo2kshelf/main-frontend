import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './ItemCount';

export default {
  title: 'TemplateRecord/atoms/DetailsTableItem/Count',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    readAt: {table: {disable: true}},
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
} as Meta;

export const Primary: Story<ComponentProps> = (args) => <Component {...args} />;
Primary.args = {
  count: 1,
};
