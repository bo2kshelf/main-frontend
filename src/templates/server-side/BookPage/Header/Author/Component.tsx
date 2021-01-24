import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  name: string;
  roles: string | null;
  link: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  roles,
  name,
  link,
}) => (
  <div className={clsx(className, 'flex', 'items-center')}>
    {roles && (
      <span className={clsx('mr-1', 'whitespace-nowrap')}>{roles}</span>
    )}
    <NextLink href={link}>
      <a
        className={clsx(
          'font-bold',
          'select-all',
          'whitespace-nowrap',
          'text-lg',
        )}
      >
        {name}
      </a>
    </NextLink>
  </div>
);
