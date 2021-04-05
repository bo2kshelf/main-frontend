import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/layout/PageLayout';
import {Component, ComponentProps} from './Component';

export default {
  title: 'SeriesPage/Header/Component',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    relatedAuthors: {table: {disable: true}},
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

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full')} />
);
Primary.args = {
  title: 'とある科学の超電磁砲',
  relatedAuthors: [
    {id: 'A', name: '冬月基'},
    {id: 'B', name: '鎌池和馬'},
    {id: 'C', name: 'はいむらきよたか'},
  ],
};
