import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {Container, ContainerProps} from './Container';

export default {
  title: 'Bookpage/Header/Profile/Details/Container',
  component: Container,
  argTypes: {
    className: {table: {disable: true}},
    book: {table: {disable: true}},
  },
  decorators: [
    (Story) => (
      <div className={clsx('flex')}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Primary: Story<ContainerProps> = (args) => <Container {...args} />;
Primary.args = {
  book: {
    isbn: '9784764905870',
    publishers: [{id: '1', name: '小学館'}],
  },
};
