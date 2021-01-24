import clsx from 'clsx';
import React from 'react';
import {Header, HeaderProps} from './Header';

export type ComponentProps = {
  className?: string;
  book: HeaderProps['book'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  book,
}) => (
  <main className={clsx(className)}>
    {children}
    <Header book={book} />
  </main>
);
