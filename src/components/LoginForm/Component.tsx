import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  githubUrl: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  githubUrl,
}) => (
  <div
    className={clsx(
      className,
      'flex',
      'flex-col',
      'px-8',
      'py-8',
      'bg-white',
      'shadow-lg',
      'rounded-xl',
    )}
  >
    <div className={clsx('w-64', 'space-y-4')}>{children}</div>
  </div>
);
