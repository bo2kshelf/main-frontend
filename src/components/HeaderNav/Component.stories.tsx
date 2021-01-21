import {ApolloProvider} from '@apollo/client';
import {Meta, Story} from '@storybook/react/types-6-0';
import clsx from 'clsx';
import {createMockClient} from 'mock-apollo-client';
import React from 'react';
import {HeaderNavUserInfoDocument} from '~/_generated/apollo';
import {icons} from '~~/.storybook/assets';
import {Component, ComponentProps} from './Component';

export default {
  title: 'HeaderNav/Component',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {table: {disable: true}},
    userLoading: {table: {disable: true}},
    userAuthenticated: {table: {disable: true}},
  },
  decorators: [
    (Story) => {
      const mockClient = createMockClient();
      mockClient.setRequestHandler(
        HeaderNavUserInfoDocument,
        async ({query}) => ({
          data: {
            currentUser: {
              userName: 'INTERNET_EXPLORER',
              displayName: 'IAMTHEKIDYOUKNOWWHATIMEAN',
              picture: icons[0],
            },
          },
        }),
      );
      return (
        <ApolloProvider client={mockClient}>
          <Story />
        </ApolloProvider>
      );
    },
  ],
} as Meta;

export const Loading: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full', 'h-20')} />
);
Loading.storyName = 'ユーザ情報ロード中';
Loading.args = {
  userLoading: true,
  userAuthenticated: false,
};

export const Authed: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full', 'h-20')} />
);
Authed.storyName = 'ログイン済み';
Authed.args = {
  userLoading: false,
  userAuthenticated: true,
};

export const NotAuthed: Story<ComponentProps> = (args) => (
  <Component {...args} className={clsx('w-full', 'h-20')} />
);
NotAuthed.storyName = '未ログイン時';
NotAuthed.args = {
  userLoading: false,
  userAuthenticated: false,
};
