import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {
  ComponentProps,
  MoreLikedBooksComponent,
  MoreReadingBooksComponent,
} from './Component';

export default {
  title: 'UserPage/ReadingLineupSection/MoreLink',
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const MoreReadingBooks: Story<ComponentProps> = (args) => (
  <MoreReadingBooksComponent {...args} />
);
MoreReadingBooks.args = {
  userName: 'username',
};

export const MoreLikedBooks: Story<ComponentProps> = (args) => (
  <MoreLikedBooksComponent {...args} />
);
MoreLikedBooks.args = {
  userName: 'username',
};
