import clsx from 'clsx';
import React from 'react';
import {User} from './User';

export type ComponentProps = {
  className?: string;
};
export const Component: React.FC<ComponentProps> = ({className}) => (
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
      <div className={clsx()}>
        <User />
      </div>
    </div>
  </nav>
);
