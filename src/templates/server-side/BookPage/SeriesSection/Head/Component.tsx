import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  title: string;
  link: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  link,
  title,
}) => (
  <div className={clsx(className)}>
    <NextLink href={link}>
      <a>
        <h2 className={clsx('text-2xl')}>{title}</h2>
      </a>
    </NextLink>
  </div>
);
