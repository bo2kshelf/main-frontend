import clsx from 'clsx';
import React from 'react';
import {LoginInputForm} from '~/components/LoginInputForm';

export type ContainerProps = Record<string, never>;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return (
    <main className={clsx('flex', 'justify-center', 'items-center')}>
      <div className={clsx('w-full', 'max-w-md', 'grid')}>
        <LoginInputForm />
      </div>
    </main>
  );
};
Container.displayName = 'LoginPage';
