import clsx from 'clsx';
import React from 'react';
import {Author, AuthorProps} from '../Author';
import {Details, DetailsProps} from './Details';

export type ComponentProps = {
  className?: string;
  book: {
    title: string;
    authors: AuthorProps['author'][];
  } & DetailsProps['book'];
};
export const Component: React.FC<ComponentProps> = ({className, book}) => (
  <div className={clsx(className)}>
    <h1 className={clsx('text-3xl', 'select-all')}>{book.title}</h1>
    <div className={clsx('mt-4', 'flex', 'space-x-2')}>
      {book.authors.map((author) => (
        <Author key={author.id} author={author} />
      ))}
    </div>
    <Details className={clsx('mt-4')} book={book} />
  </div>
);
