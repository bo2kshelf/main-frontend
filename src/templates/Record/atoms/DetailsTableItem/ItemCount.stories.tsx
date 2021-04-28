import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './ItemReadAt';

export default {
  title: 'TemplateRecord/atoms/DetailsTableItem/ReadAt',
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

export const Normal: Story<ComponentProps> = (args) => <Component {...args} />;
Normal.args = {
  readAt: '2021-01-21',
};
Normal.storyName = '日付がある';

export const NoReadAt: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
NoReadAt.args = {};
NoReadAt.storyName = '日付不明';
