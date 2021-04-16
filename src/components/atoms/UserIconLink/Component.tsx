import clsx from 'clsx';
import React from 'react';
import {LinkUsersIndexPage} from '~/components/atoms/Link';
import {UserIcon} from '~/components/atoms/UserIcon';

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
  <LinkUsersIndexPage username={userName} className={clsx(className)}>
    <UserIcon picture={picture} className={clsx('w-full', 'h-full')} />
  </LinkUsersIndexPage>
);
