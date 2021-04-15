import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {BooksSection} from '~/components/organisms/BooksSection';
import {Header} from './Header';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;

export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  title,
  authors,
  books,
}) => (
  <main className={clsx(className)}>
    {children}
    <Header className={clsx('w-full')} title={title} relatedAuthors={authors} />
    <BooksSection className={clsx('mt-2', 'w-full')} books={books} />
  </main>
);
