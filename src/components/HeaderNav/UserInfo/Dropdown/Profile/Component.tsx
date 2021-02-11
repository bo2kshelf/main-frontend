import clsx from 'clsx';
import NextLink, {LinkProps} from 'next/link';
import React from 'react';
import {Icon} from '~/components/common/Icon';

export type ComponentProps = {
  className?: string;
  link: LinkProps['href'];
  picture: string;
  userName: string;
  displayName: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  link,
  picture,
  userName,
  displayName,
}) => (
  <NextLink href={link}>
    <a
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
      <Icon className={clsx('mr-4', 'w-12', 'h-12')} picture={picture} />
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
    </a>
  </NextLink>
);
