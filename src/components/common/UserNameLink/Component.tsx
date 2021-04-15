import clsx from 'clsx';
import React from 'react';
import {LinkUsersIndexPage} from '~/atoms/Link';

export type ComponentProps = {
  className?: string;
  userName: string;
};
export const Component: React.FC<ComponentProps> = ({className, userName}) => {
  return (
    <LinkUsersIndexPage
      username={userName}
      className={clsx(className, 'select-all')}
    >
      @{userName}
    </LinkUsersIndexPage>
  );
};
