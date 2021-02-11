import clsx from 'clsx';
import React from 'react';
import {LogoutLink, SettingsLink} from './CommonLink';
import {Profile} from './Profile';
import {
  HaveBooksList,
  ReadBooksLink,
  ReadingBooksLink,
  StackedBooksLink,
  WishReadBooksLink,
} from './UserPageLink';

export type ComponentProps = {
  className?: string;
  account: {
    picture: string;
    userName: string;
    displayName: string;
  };
};
export const Component: React.FC<ComponentProps> = ({className, account}) => (
  <div
    className={clsx(
      className,
      'rounded',
      'bg-white',
      'shadow-lg',
      'grid',
      'grid-cols-2',
      'overflow-hidden',
    )}
  >
    <Profile className={clsx('col-span-2', 'col-start-1')} account={account} />
    <ReadingBooksLink
      className={clsx('col-span-1', 'col-start-1')}
      account={account}
    />
    <ReadBooksLink
      className={clsx('col-span-1', 'col-start-2')}
      account={account}
    />

    <StackedBooksLink
      className={clsx('col-span-1', 'col-start-1')}
      account={account}
    />
    <HaveBooksList
      className={clsx('col-span-1', 'col-start-2')}
      account={account}
    />

    <WishReadBooksLink
      className={clsx('col-span-1', 'col-start-2')}
      account={account}
    />

    <SettingsLink className={clsx('col-span-1', 'col-start-1')} />
    <LogoutLink className={clsx('col-span-1', 'col-start-2')} />
  </div>
);
