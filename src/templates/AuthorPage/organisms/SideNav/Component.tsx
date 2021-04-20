import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  name: string;
};
export const Component: React.FC<ComponentProps> = ({className, name}) => (
  <nav className={clsx(className)}>
    <div className={clsx('px-6', 'py-4', 'bg-white')}>
      <h1 className={clsx('text-lg', 'font-bold')}>{name}</h1>
    </div>
  </nav>
);
