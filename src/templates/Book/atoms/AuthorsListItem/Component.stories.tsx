import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {AuthorRole} from '~/lib/AuthorRole';
import {Component, ComponentProps} from './Component';

export default {
  title: 'TemplateBook/atoms/AuthorsListItem',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    roles: {
      defaultValue: [AuthorRole.Author],
      control: {type: 'inline-check', options: Object.values(AuthorRole)},
    },
  },
} as Meta;

export const Primary: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx()} />
);
Primary.args = {
  id: '1',
  name: 'サンプル著者',
};

export const SingleRole: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx()} />
);
SingleRole.args = {
  id: '1',
  name: 'サンプル著者',
  roles: [AuthorRole.Author],
};
SingleRole.argTypes = {
  roles: {table: {disable: true}},
};

export const MultiRoles: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx()} />
);
MultiRoles.args = {
  id: '1',
  name: 'サンプル著者',
  roles: [AuthorRole.Author, AuthorRole.TranslateSupervisor],
};
MultiRoles.argTypes = {
  roles: {table: {disable: true}},
};
