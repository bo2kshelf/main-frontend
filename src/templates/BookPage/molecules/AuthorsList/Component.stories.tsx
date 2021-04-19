import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import React from 'react';
import {AuthorRole} from '~/lib/AuthorRole';
import {Component, ComponentProps} from './Component';

export default {
  title: 'Bookpage/molecules/AuthorsList',
  component: Component,
  argTypes: {
    className: {table: {disable: true}},
    authors: {table: {disable: true}},
  },
} as Meta;

export const SingleAuthor: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx()} />
);
SingleAuthor.args = {
  authors: [{id: '1', name: 'Author 1', roles: [AuthorRole.OriginalAuthor]}],
};

export const MultiAuthors: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx()} />
);
MultiAuthors.args = {
  authors: [
    {id: '1', name: 'Author 1', roles: [AuthorRole.OriginalAuthor]},
    {id: '2', name: 'Author 2', roles: [AuthorRole.ComicArtist]},
  ],
};
