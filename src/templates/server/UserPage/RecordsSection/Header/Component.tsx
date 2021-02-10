import clsx from 'clsx';
import NextLink, {LinkProps} from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  link: LinkProps['href'];
  i18n: Record<'title' | 'more', string>;
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
        <a className={clsx('ml-2')}>{i18n.more}</a>
      </NextLink>
    )}
  </div>
);
