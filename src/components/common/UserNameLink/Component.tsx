import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  userName: string;
};
export const Component: React.FC<ComponentProps> = ({className, userName}) => {
  return (
    <NextLink href={`/users/${userName}`}>
      <a className={clsx(className, 'select-all')}>@{userName}</a>
    </NextLink>
  );
};
