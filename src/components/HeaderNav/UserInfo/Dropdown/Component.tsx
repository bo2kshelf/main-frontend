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
  user: {
    picture: string;
    userName: string;
    displayName: string;
  };
};
export const UnstyledComponent: React.FC<ComponentProps> = ({
  className,
  user,
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
    <Profile className={clsx('col-span-2', 'col-start-1')} account={user} />
    <ReadingBooksLink
      className={clsx('col-span-1', 'col-start-1')}
      user={user}
    />
    <ReadBooksLink className={clsx('col-span-1', 'col-start-2')} user={user} />

    <StackedBooksLink
      className={clsx('col-span-1', 'col-start-1')}
      user={user}
    />
    <HaveBooksList className={clsx('col-span-1', 'col-start-2')} user={user} />

    <div
      className={clsx('col-span-1', 'col-start-1', 'bg-white', 'bg-opacity-90')}
    />
    <WishReadBooksLink
      className={clsx('col-span-1', 'col-start-2')}
      user={user}
    />

    <SettingsLink className={clsx('col-span-1', 'col-start-1')} />
    <LogoutLink className={clsx('col-span-1', 'col-start-2')} />
  </div>
);

export const Component = styled(UnstyledComponent)`
  backdrop-filter: blur(2px);
`;
