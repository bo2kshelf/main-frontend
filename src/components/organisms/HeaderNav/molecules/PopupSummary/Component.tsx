import clsx from 'clsx';
import React from 'react';
import {UserIcon} from '~/components/atoms/UserIcon';

export type ComponentProps = {
  className?: string;
  picture: string;
};
export const Component: React.FC<ComponentProps> = ({className, picture}) => (
  <summary
    className={clsx(
      className,
      'block',
      'outline-none',
      'rounded-full',
      'overflow-hidden',
    )}
  >
    <UserIcon
      className={clsx('w-full', 'h-full', 'cursor-pointer')}
      picture={picture}
    />
  </summary>
);
