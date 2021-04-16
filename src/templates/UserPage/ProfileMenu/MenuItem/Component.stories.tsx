import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {
  ComponentProps,
  HaveBooksComponent,
  LikedBooksComponent,
  ReadBooksComponent,
  ReadingBooksComponent,
  ReadRecordsComponent,
  StackedBooksComponent,
  WishReadBooksComponent,
} from './Component';

export default {
  title: 'UserPage/ProfileMenu/MenuItem',
  args: {count: 20, width: 256},
  argTypes: {
    className: {table: {disable: true}},
    width: {control: {type: 'range', min: 256, max: 512, step: 8}},
  },
  decorators: [
    (Story, {args}) => (
      <div style={{width: args.width}}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const ReadingBooks: Story<ComponentProps> = (args) => (
  <ReadingBooksComponent {...args} />
);

export const HaveBooks: Story<ComponentProps> = (args) => (
  <HaveBooksComponent {...args} />
);

export const ReadBooks: Story<ComponentProps> = (args) => (
  <ReadBooksComponent {...args} />
);

export const ReadRecords: Story<ComponentProps> = (args) => (
  <ReadRecordsComponent {...args} />
);
export const StackedBooks: Story<ComponentProps> = (args) => (
  <StackedBooksComponent {...args} />
);

export const WishReadBooks: Story<ComponentProps> = (args) => (
  <WishReadBooksComponent {...args} />
);
export const LikedBooks: Story<ComponentProps> = (args) => (
  <LikedBooksComponent {...args} />
);
