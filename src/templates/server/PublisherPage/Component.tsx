import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {AllBooksSection} from './AllBooksSection';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  name,
  books,
}) => (
  <main className={clsx(className)}>
    {children}
    <AllBooksSection
      className={clsx('w-full')}
      publisher={{name}}
      books={books}
    />
  </main>
);
