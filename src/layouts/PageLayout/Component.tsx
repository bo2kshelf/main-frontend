import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
};

export const Component: React.FC<ComponentProps> = ({className, children}) => {
  return <div className={clsx(className, 'px-8', 'py-12')}>{children}</div>;
};
Component.displayName = 'PageLayout';
