import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  i18n: {
    title: string;
  };
};
export const Component: React.FC<ComponentProps> = ({className, i18n}) => (
  <div className={clsx(className)}>
    <h3 className={clsx('font-bold', 'text-xl')}>{i18n.title}</h3>
  </div>
);
