import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  Side: React.VFC<{className: string}>;
  Main: React.VFC<{className: string}>;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  Side,
  Main,
}) => (
  <div
    className={clsx(className, 'flex', 'flex-col', 'lg:flex-row', 'min-h-full')}
  >
    <div className={clsx('w-full', 'lg:w-1/4')}>
      <Side className={clsx()} />
    </div>
    <div className={clsx('ml-0', 'lg:ml-4', 'flex-grow')}>
      <Main className={clsx()} />
    </div>
  </div>
);
