import clsx from 'clsx';
import React from 'react';
import {BookLinkProps} from '~/components/common/BookLink';

export type ComponentProps = {
  className?: string;
  books: BookLinkProps['book'][];
  BookLink: React.FC<Omit<BookLinkProps, 'className'>>;
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
