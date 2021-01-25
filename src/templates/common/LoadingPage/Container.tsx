import clsx from 'clsx';
import React from 'react';

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = ({className, ...props}) => {
  return (
    <main className={clsx(className, 'flex', 'justify-center', 'items-center')}>
      <p>LOADING</p>
    </main>
  );
};
Container.displayName = 'UserPage';
