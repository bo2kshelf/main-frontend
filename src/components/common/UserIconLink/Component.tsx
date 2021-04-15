import clsx from 'clsx';
import React from 'react';
import {LinkUsersIndexPage} from '~/atoms/Link';
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
  <LinkUsersIndexPage username={userName} className={clsx(className)}>
    <Icon picture={picture} className={clsx('w-full', 'h-full')} />
  </LinkUsersIndexPage>
);
