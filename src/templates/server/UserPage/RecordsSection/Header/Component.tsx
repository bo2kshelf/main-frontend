import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {Links} from '~/lib/Links';

export type ComponentProps = {
  className?: string;
  link:
    | Links['/users/[username]/have']
    | Links['/users/[username]/read']
    | Links['/users/[username]/reading']
    | Links['/users/[username]/wish']
    | Links['/users/[username]/stacked'];
  i18n: {
    title: string;
  };
  hasMore: boolean;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  i18n,
  link,
  hasMore,
}) => (
  <div className={clsx(className, 'flex', 'items-center')}>
    <h3 className={clsx('font-bold', 'text-xl')}>{i18n.title}</h3>
    {hasMore && (
      <NextLink href={link}>
        <a>もっと見る</a>
      </NextLink>
    )}
  </div>
);
