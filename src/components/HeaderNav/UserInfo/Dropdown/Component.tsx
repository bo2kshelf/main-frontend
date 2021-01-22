import clsx from 'clsx';
import React from 'react';
import {
  LogoutLink,
  ReadBooksLink,
  ReadingBooksLink,
  SettingsLink,
} from './Link';
import {Profile} from './Profile';

export type ComponentProps = {
  className?: string;
  picture: string;
  userName: string;
  displayName: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  picture,
  userName,
  displayName,
}) => (
  <div
    className={clsx(
      className,
      'rounded',
      'bg-white',
      'shadow-md',
      'grid',
      'grid-cols-none',
      'overflow-hidden',
    )}
  >
    <Profile
      className={clsx('col-span-2', 'col-start-1')}
      picture={picture}
      userName={userName}
      displayName={displayName}
    />
    <ReadBooksLink className={clsx('col-span-1', 'col-start-1')} />
    <ReadingBooksLink className={clsx('col-span-1', 'col-start-1')} />
    <SettingsLink className={clsx('col-span-1', 'col-start-1')} />
    <LogoutLink className={clsx('col-span-1', 'col-start-2')} />
  </div>
);
