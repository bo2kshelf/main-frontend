import clsx from 'clsx';
import React from 'react';
import {LinkUsersIndexPage} from '~/components/atoms/Link';
import {UserIconLink} from '~/components/atoms/UserIconLink';
import {UserNameLink} from '~/components/atoms/UserNameLink';

export type ComponentProps = {
  className?: string;
  user: {
    displayName: string;
    uniqueName: string;
    picture: string;
  };
};
export const Component: React.VFC<ComponentProps> = ({className, user}) => (
  <div className={clsx(className, 'flex', 'items-center')}>
    <UserIconLink
      className={clsx('w-12', 'h-12')}
      {...{picture: user.picture, userName: user.uniqueName}}
    />
    <div className={clsx('ml-2', 'flex', 'flex-col')}>
      <LinkUsersIndexPage
        className={clsx('text-lg', 'hover:underline')}
        username={user.uniqueName}
      >
        {user.displayName}
      </LinkUsersIndexPage>
      <UserNameLink
        userName={user.uniqueName}
        className={clsx('text-sm', 'text-gray-500', 'hover:underline')}
      />
    </div>
  </div>
);
