import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
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
export const UnstyledComponent: React.FC<ComponentProps> = ({
  className,
  account,
}) => (
  <div
    className={clsx(
      className,
      'rounded',
      'shadow-lg',
      'grid',
      'grid-cols-2',
      'overflow-hidden',
      'select-none',
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

    <div
      className={clsx('col-span-1', 'col-start-1', 'bg-white', 'bg-opacity-90')}
    />
    <WishReadBooksLink
      className={clsx('col-span-1', 'col-start-2')}
      account={account}
    />

    <SettingsLink className={clsx('col-span-1', 'col-start-1')} />
    <LogoutLink className={clsx('col-span-1', 'col-start-2')} />
  </div>
);

export const Component = styled(UnstyledComponent)`
  backdrop-filter: blur(2px);
`;
