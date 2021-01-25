import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/layout/PageLayout';
import {placeholder} from '~~/.storybook/assets';
import {
  ContainerProps,
  HaveRecordsSection,
  ReadingRecordsSection,
  ReadRecordsSection,
} from './Container';

export default {
  title: 'UserPage/RecordsSection/Container',
  args: {
    user: {
      displayName: 'SnO2WMaN',
    },
    records: [...new Array(10)].map((_, i) => ({
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
    records: {table: {disable: true}},
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <PageLayout className={clsx('container', 'mx-auto')}>
        <Story />
      </PageLayout>
    ),
  ],
} as Meta;

export const Read: Story<ContainerProps> = (args) => (
  <ReadRecordsSection {...args} />
);
Read.storyName = '読んだ本';

export const Reading: Story<ContainerProps> = (args) => (
  <ReadingRecordsSection {...args} />
);
Reading.storyName = '読んでいる本';

export const Have: Story<ContainerProps> = (args) => (
  <HaveRecordsSection {...args} />
);
Have.storyName = '持っている本';