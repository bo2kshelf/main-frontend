import clsx from 'clsx';
import React from 'react';
import {BookCoverLink} from '~/components/atoms/BookCoverLink';

export const Container: React.FC<{
  className?: string;
  books: {id: string; title: string; cover?: string}[];
}> = ({className, books}) => (
  <div
    className={clsx(
      className,
      'grid',
      'grid-cols-2',
      'sm:grid-cols-4',
      'md:grid-cols-8',
      'gap-4',
    )}
  >
    {books.map((book) => (
      <BookCoverLink
        className={clsx('h-28', 'xl:h-32')}
        key={book.id}
        book={book}
      />
    ))}
  </div>
);
