import clsx from 'clsx';
import React from 'react';
import {UserInfo} from './UserInfo';

export type ComponentProps = {
  className?: string;
  userLoading: boolean;
  userAuthenticated: boolean;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  userLoading,
  userAuthenticated,
}) => (
  <nav className={clsx(className, 'bg-blue-400', 'flex', 'items-center')}>
    <div
      className={clsx('container', 'mx-auto', 'px-12', 'flex', 'items-center')}
    >
      <div className={clsx('flex-grow')} />
      <div className={clsx()}>
        {userLoading && <div className={clsx()} />}
        {!userLoading && !userAuthenticated && <div className={clsx()} />}
        {!userLoading && userAuthenticated && <UserInfo />}
      </div>
    </div>
  </nav>
);
