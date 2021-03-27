import clsx from 'clsx';
import React from 'react';
import {Author, AuthorProps} from '../Author';
import {Details} from './Details';

export type ComponentProps = {
  className?: string;
  book: {
    title: string;
    subtitle?: string;
    authors: AuthorProps['author'][];
    isbn?: string;
    publishers?: {id: string; name: string}[];
  };
};
export const Component: React.FC<ComponentProps> = ({className, book}) => (
  <div className={clsx(className)}>
    <h1 className={clsx('text-3xl', 'font-bold', 'select-all')}>
      {book.title}
    </h1>
    {book.subtitle && (
      <h2 className={clsx('mt-2', 'text-lg', 'select-all', 'text-gray-500')}>
        {book.subtitle}
      </h2>
    )}
    <div className={clsx('mt-4', 'flex', 'space-x-2')}>
      {book.authors.map((author) => (
        <Author key={author.id} author={author} />
      ))}
    </div>
    <Details className={clsx('mt-4')} book={book} />
  </div>
);
Component.displayName = 'Profile';
