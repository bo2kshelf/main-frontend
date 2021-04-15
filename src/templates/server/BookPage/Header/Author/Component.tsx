import clsx from 'clsx';
import React from 'react';
import {LinkAuthorsIndexPage} from '~/atoms/Link';

export type ComponentProps = {
  className?: string;
  id: string;
  name: string;
  roles?: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  roles,
  id,
  name,
}) => (
  <div className={clsx(className, 'flex', 'items-center')}>
    {roles && (
      <span className={clsx('mr-1', 'whitespace-nowrap')}>{roles}</span>
    )}
    <LinkAuthorsIndexPage
      id={id}
      className={clsx(
        'font-bold',
        'select-all',
        'whitespace-nowrap',
        'text-lg',
      )}
    >
      {name}
    </LinkAuthorsIndexPage>
  </div>
);
