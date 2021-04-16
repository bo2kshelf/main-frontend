import clsx from 'clsx';
import React from 'react';
import {HeaderNav} from '~/components/organisms/HeaderNav';
import {PageLayout} from '../PageLayout';

export type ComponentProps = {
  className?: string;
};

export const Component: React.FC<ComponentProps> = ({className, children}) => {
  return (
    <div
      className={clsx(
        className,
        'bg-gray-50',
        'min-h-screen',
        'flex',
        'flex-col',
      )}
    >
      <HeaderNav
        className={clsx('sticky', 'top-0', 'z-50', 'w-full', 'h-24')}
      />
      <PageLayout className={clsx('container', 'mx-auto', 'flex-grow')}>
        {children}
      </PageLayout>
    </div>
  );
};
Component.displayName = 'AppLayout';
