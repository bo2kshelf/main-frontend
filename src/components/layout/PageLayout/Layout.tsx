import clsx from 'clsx';
import React from 'react';

export type LayoutProps = {
  className?: string;
};

export const Layout: React.FC<LayoutProps> = ({className, children}) => {
  return <div className={clsx(className, 'px-8', 'py-12')}>{children}</div>;
};
Layout.displayName = 'PageLayout';
