import clsx from 'clsx';
import React from 'react';
import {Profile} from './Profile';

export type ComponentProps = {
  className?: string;
  picture: string;
  userName: string;
  displayName: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  picture,
  userName,
  displayName,
}) => (
  <div
    className={clsx(
      className,
      'rounded',
      'bg-white',
      'px-4',
      'py-2',
      'shadow-md',
    )}
  >
    <Profile picture={picture} userName={userName} displayName={displayName} />
  </div>
);
