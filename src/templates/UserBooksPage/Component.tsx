import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {HeaderProps} from './Header';
import {PageType, TransformedProps} from './transform';

export type ComponentProps<P extends PageType> = Merge<
  TransformedProps<P>,
  {className?: string; Header: React.FC<HeaderProps>}
>;
export const Component: React.FC<ComponentProps<PageType>> = ({
  className,
  children,
  displayName,
  picture,
  userName,
  books,
  count,
  Header,
}) => (
  <main className={clsx(className)}>
    {children}
    <Header
      className={clsx('w-full', 'mt-4', 'mb-4')}
      account={{displayName}}
      records={{count}}
    />
  </main>
);
