import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {Component, ComponentProps} from './ItemTitle';

export default {
  title: 'TemplateRecord/atoms/DetailsTableItem/Title',
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

export const WithSubTitle: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
WithSubTitle.args = {
  id: 'book1',
  title: 'サンプルタイトル 1',
  subtitle: 'サンプルサブタイトル 1',
};
WithSubTitle.storyName = 'サブタイトルがある';

export const NoSubTitle: Story<ComponentProps> = (args) => (
  <Component {...args} />
);
NoSubTitle.args = {
  id: 'book1',
  title: 'サンプルタイトル 1',
};
NoSubTitle.storyName = 'サブタイトルがない';
