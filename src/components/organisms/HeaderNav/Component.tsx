import clsx from 'clsx';
import React from 'react';
import {Profile} from './molecules/Profile';

export type ComponentProps = {
  className?: string;
  signedIn: boolean;
};
export const Component: React.FC<ComponentProps> = ({className, signedIn}) => (
  <nav
    className={clsx(
      className,
      'bg-gray-700',
      'flex',
      'items-center',
      'shadow-xl',
    )}
  >
    <div
      className={clsx('container', 'mx-auto', 'px-12', 'flex', 'items-center')}
    >
      <div className={clsx('flex-grow')} />
      <Profile className={clsx()} />
    </div>
  </nav>
);
