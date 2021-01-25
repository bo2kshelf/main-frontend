import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {Icon} from '~/components/common/Icon';

export type ComponentProps = {
  className?: string;
  link: string;
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
    <a className={clsx(className, 'flex', 'py-2', 'px-4', 'hover:bg-blue-50')}>
      <Icon className={clsx('mr-4', 'w-12', 'h-12')} picture={picture} />
      <div className={clsx('flex', 'flex-col', 'justify-center', 'w-40')}>
        <span className={clsx('font-bold', 'select-all', 'truncate')}>
          {displayName}
        </span>
        <span className={clsx('text-sm', 'select-all', 'text-gray-400')}>
          {userName}
        </span>
      </div>
    </a>
  </NextLink>
);
