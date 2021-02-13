import clsx from 'clsx';
import React from 'react';
import {BooksSection} from '~/components/common/BooksSection';
import {Header} from './Header';

export type ComponentProps = {
  className?: string;
  title: string;
  relatedAuthors: {author: {id: string; name: string}}[];
  parts: {book: {id: string; title: string; cover?: string}}[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  children,
  relatedAuthors,
  parts,
}) => (
  <main className={clsx(className)}>
    {children}
    <Header
      className={clsx('w-full')}
      title={title}
      relatedAuthors={relatedAuthors}
    />
    <BooksSection
      className={clsx('mt-2', 'w-full')}
      books={parts.map(({book}) => book)}
    />
  </main>
);
