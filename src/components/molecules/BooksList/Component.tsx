import clsx from 'clsx';
import React from 'react';
import {BookCoverLinkProps} from '~/components/atoms/BookCoverLink';

export type ComponentProps = {
  className?: string;
  books: BookCoverLinkProps['book'][];
  BookLink: React.FC<Omit<BookCoverLinkProps, 'className'>>;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  books,
  BookLink,
}) => (
  <div className={clsx(className)}>
    {books.map((book) => (
      <BookLink key={book.id} book={book} />
    ))}
  </div>
);
