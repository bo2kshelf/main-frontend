import clsx from 'clsx';
import React from 'react';
import {HeaderNav} from '~/components/HeaderNav';
import {PageLayout} from '../PageLayout';

export type ComponentProps = {
  className?: string;
};

export const Component: React.FC<ComponentProps> = ({className, children}) => {
  return (
    <div className={clsx(className, 'bg-gray-50', 'min-h-screen')}>
      <HeaderNav className={clsx('w-full', 'h-24')} />
      <PageLayout className={clsx('container', 'mx-auto')}>
        {children}
      </PageLayout>
    </div>
  );
};
Component.displayName = 'AppLayout';
