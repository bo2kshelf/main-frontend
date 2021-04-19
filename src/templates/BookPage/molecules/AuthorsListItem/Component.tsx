import clsx from 'clsx';
import React from 'react';
import {AuthorRolesItem} from '~/components/atoms/AuthorRolesItem';
import {LinkAuthorsIndexPage} from '~/components/atoms/Link';
import {AuthorRole} from '~/lib/AuthorRole';

export type ComponentProps = {
  className?: string;
  id: string;
  name: string;
  roles: AuthorRole[];
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  id,
  name,
  roles,
}) => {
  return (
    <span className={clsx(className, 'inline-flex', 'items-center')}>
      <LinkAuthorsIndexPage className={clsx('text-sm', 'font-bold')} id={id}>
        {name}
      </LinkAuthorsIndexPage>
      <span
        className={clsx(
          'text-xs',
          'text-gray-600',
          'ml-1',
          'space-x-0.5',
          'select-none',
        )}
      >
        (
        {roles.map((role, i, {length}) => (
          <AuthorRolesItem key={role.toString()} role={role} />
        ))}
        )
      </span>
    </span>
  );
};
