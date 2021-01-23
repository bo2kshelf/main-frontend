import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {className?: string};
export const Component: React.FC<ComponentProps> = ({className, children}) => (
  <div className={clsx(className)} />
);

export type ContainerProps = Record<string, unknown>;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component />;
};
