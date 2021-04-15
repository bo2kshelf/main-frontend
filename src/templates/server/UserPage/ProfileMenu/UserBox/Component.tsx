import clsx from 'clsx';
import React from 'react';
import {UserIconLink} from '~/components/common/UserIconLink';
import {UserNameLink} from '~/components/common/UserNameLink';

export type ComponentProps = {
  className?: string;
  userName: string;
  displayName: string;
  picture: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  userName,
  displayName,
  picture,
}) => {
  return (
    <div
      className={clsx(
        className,
        'bg-gray-800',
        'py-8',
        'flex',
        'flex-col',
        'items-center',
      )}
    >
      <UserIconLink
        picture={picture}
        userName={userName}
        className={clsx('w-24', 'h-24')}
      />
      <div className={clsx('mt-4', 'flex', 'flex-col', 'items-center')}>
        <span className={clsx('text-lg', 'text-gray-100', 'select-all')}>
          {displayName}
        </span>
        <UserNameLink
          className={clsx('text-md', 'text-gray-400', 'select-all')}
          userName={userName}
        />
      </div>
    </div>
  );
};
