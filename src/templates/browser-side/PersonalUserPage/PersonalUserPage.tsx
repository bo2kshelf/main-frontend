import clsx from 'clsx';
import NextImage from 'next/image';
import React from 'react';

export type ComponentProps = {
  className?: string;
  picture: string;
  userName: string;
  displayName: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  picture,
  userName,
  displayName,
}) => (
  <main className={clsx(className)}>
    {children}
    <div className={clsx('flex')}>
      <div className={clsx('w-24', 'h-24', 'relative')}>
        <NextImage src={picture} width={128} height={128} />
      </div>
      <div className={clsx('flex', 'flex-col')}>
        <span className={clsx('text-xl', 'font-bold')}>{displayName}</span>
        {/* eslint-disable-next-line @shopify/jsx-no-hardcoded-content */}
        <span className={clsx('text-gray-500')}>{`@${userName}`}</span>
      </div>
    </div>
  </main>
);

export type ContainerProps = {
  currentUser: {
    profile: {
      userName: string;
      displayName: string;
      picture: string;
    };
  };
};
export const Container: React.FC<ContainerProps> = ({
  currentUser,
  ...props
}) => {
  return <Component {...currentUser.profile} />;
};
