import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {Icon} from '~/components/common/Icon';

export type ComponentProps = {
  className?: string;
  userName: string;
  picture: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  userName,
  picture,
}) => (
  <NextLink href={`/users/${userName}`}>
    <a className={clsx(className)}>
      <Icon picture={picture} className={clsx('w-full', 'h-full')} />
    </a>
  </NextLink>
);
