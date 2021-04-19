import clsx from 'clsx';
import React from 'react';
import {AuthorRole} from '~/lib/AuthorRole';
import {AuthorsListItem} from '../AuthorsListItem';

export type ComponentProps = {
  className?: string;
  authors: {id: string; name: string; roles: AuthorRole[]}[];
};
export const Component: React.VFC<ComponentProps> = ({className, authors}) => (
  <div className={clsx(className)}>
    {authors.map(({id, name, roles}) => (
      <AuthorsListItem
        key={id}
        className={clsx('mr-1')}
        {...{id, name, roles}}
      />
    ))}
  </div>
);
