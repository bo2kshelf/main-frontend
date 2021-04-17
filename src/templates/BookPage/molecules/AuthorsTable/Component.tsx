import clsx from 'clsx';
import React from 'react';
import {AuthorsTableItem} from '../AuthorsTableItem';

export type ComponentProps = {
  className?: string;
  authors: {id: string; name: string}[];
};
export const Component: React.VFC<ComponentProps> = ({className, authors}) => (
  <div className={clsx(className)}>
    {authors.map(({id, name}) => (
      <AuthorsTableItem key={id} className={clsx('text-sm')} {...{id, name}} />
    ))}
  </div>
);
