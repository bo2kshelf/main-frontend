import clsx from 'clsx';
import React from 'react';
import {LoginForm} from '~/components/LoginForm';

export type ComponentProps = {
  className?: string;
  loginUrls: {
    github: string;
  };
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  loginUrls,
}) => (
  <main className={clsx(className, 'flex', 'justify-center', 'items-center')}>
    {children}
    <LoginForm loginUrls={loginUrls} />
  </main>
);
