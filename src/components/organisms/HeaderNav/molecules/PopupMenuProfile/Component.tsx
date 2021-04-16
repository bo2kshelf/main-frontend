import clsx from 'clsx';
import React from 'react';
import {LinkMeIndexPage} from '~/components/atoms/Link';
import {UserIcon} from '~/components/atoms/UserIcon';

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
  <LinkMeIndexPage
    className={clsx(
      className,
      'flex',
      'py-2',
      'px-4',
      'group',
      'bg-white',
      'hover:bg-blue-500',
      'bg-opacity-90',
      'hover:bg-opacity-80',
    )}
  >
    <UserIcon className={clsx('mr-4', 'w-12', 'h-12')} picture={picture} />
    <div className={clsx('flex', 'flex-col', 'justify-center', 'w-40')}>
      <span
        className={clsx(
          'font-bold',
          'truncate',
          'text-black',
          'group-hover:text-white',
        )}
      >
        {displayName}
      </span>
      <span
        className={clsx(
          'text-sm',
          'text-gray-400',
          'group-hover:text-gray-200',
        )}
      >
        <span>@</span>
        <span>{userName}</span>
      </span>
    </div>
  </LinkMeIndexPage>
);
