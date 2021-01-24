import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import {
  ContainerProps,
  HaveHeader,
  ReadHeader,
  ReadingHeader,
} from './Container';

export default {
  title: 'UserPage/RecordsSection/Header/Container',
  args: {
    user: {
      displayName: 'SnO2WMaN',
    },
  },
  argTypes: {
    className: {table: {disable: true}},
  },
} as Meta;

export const Read: Story<ContainerProps> = (args) => <ReadHeader {...args} />;
Read.storyName = '読んだ本';

export const Reading: Story<ContainerProps> = (args) => (
  <ReadingHeader {...args} />
);
Reading.storyName = '読んでいる本';

export const Have: Story<ContainerProps> = (args) => <HaveHeader {...args} />;
Have.storyName = '持っている本';
