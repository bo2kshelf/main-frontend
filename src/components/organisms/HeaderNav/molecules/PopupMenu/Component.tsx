import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {
  MenuItemHaveBooks,
  MenuItemLikedBooks,
  MenuItemLogout,
  MenuItemReadBooks,
  MenuItemReadingBooks,
  MenuItemReadRecords,
  MenuItemSettings,
  MenuItemStackedBooks,
  MenuItemWishBooks,
} from '../PopupMenuItem';
import {PopupMenuProfile} from '../PopupMenuProfile';

export type ComponentProps = {
  className?: string;
  currentUser: {userName: string; displayName: string; picture: string};
};
const UnstyledComponent: React.VFC<ComponentProps> = ({
  className,
  currentUser,
}) => (
  <div
    className={clsx(
      className,
      'flex',
      'flex-col',
      'overflow-hidden',
      'select-none',
      'rounded',
    )}
  >
    <PopupMenuProfile className={clsx('w-full')} account={currentUser} />
    <div className={clsx('w-full', 'grid', 'grid-cols-2')}>
      <MenuItemReadRecords
        className={clsx('col-span-2', 'col-start-1', 'justify-center')}
      />

      <MenuItemReadingBooks className={clsx('col-span-1', 'col-start-1')} />
      <MenuItemReadBooks className={clsx('col-span-1', 'col-start-2')} />

      <MenuItemStackedBooks className={clsx('col-span-1', 'col-start-1')} />
      <MenuItemHaveBooks className={clsx('col-span-1', 'col-start-2')} />

      <MenuItemLikedBooks className={clsx('col-span-1', 'col-start-1')} />
      <MenuItemWishBooks className={clsx('col-span-1', 'col-start-2')} />

      <MenuItemSettings className={clsx('col-span-1', 'col-start-1')} />
      <MenuItemLogout className={clsx('col-span-1', 'col-start-2')} />
    </div>
  </div>
);
export const Component = styled(UnstyledComponent)`
  backdrop-filter: blur(2px);
`;
