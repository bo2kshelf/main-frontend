import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {
  MenuItemHaveBooks,
  MenuItemLogout,
  MenuItemReadBooks,
  MenuItemReadingBooks,
  MenuItemSettings,
  MenuItemStackedBooks,
  MenuItemWishReadBooks,
} from './MenuItem';
import {Profile} from './Profile';

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
    <MenuItemReadingBooks className={clsx('col-span-1', 'col-start-1')} />
    <MenuItemReadBooks className={clsx('col-span-1', 'col-start-2')} />

    <MenuItemStackedBooks className={clsx('col-span-1', 'col-start-1')} />
    <MenuItemHaveBooks className={clsx('col-span-1', 'col-start-2')} />

    <div
      className={clsx('col-span-1', 'col-start-1', 'bg-white', 'bg-opacity-90')}
    />
    <MenuItemWishReadBooks className={clsx('col-span-1', 'col-start-2')} />

    <MenuItemSettings className={clsx('col-span-1', 'col-start-1')} />
    <MenuItemLogout className={clsx('col-span-1', 'col-start-2')} />
  </div>
);

export const Component = styled(UnstyledComponent)`
  backdrop-filter: blur(2px);
`;
