import clsx from 'clsx';
import NextImage from 'next/image';
import NextLink from 'next/link';
import React from 'react';

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
  <NextLink href="/profile">
    <a className={clsx(className, 'flex', 'p-0.5', 'hover:bg-blue-50')}>
      <div className={clsx('mr-4', 'relative', 'w-12', 'h-12')}>
        <NextImage
          className={clsx('rounded-full')}
          src={picture}
          width={64}
          height={64}
        />
      </div>
      <div className={clsx('flex', 'flex-col', 'justify-center', 'w-48')}>
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
