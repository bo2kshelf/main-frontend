import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
};
export const Component: React.FC<ComponentProps> = ({className, children}) => (
  <main className={clsx(className)}>{children}</main>
);
