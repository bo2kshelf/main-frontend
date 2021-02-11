import clsx from 'clsx';
import React from 'react';
import {BookLink, BookLinkProps} from '~/components/common/BookLink';

export type ComponentProps = {
  className?: string;
  parts: {
    book: BookLinkProps['book'];
  }[];
};
export const Component: React.FC<ComponentProps> = ({className, parts}) => (
  <div className={clsx(className)}>
    <div
      className={clsx(
        'grid',
        'grid-cols-5',
        'lg:grid-cols-10',
        'gap-4',
        'lg:gap-x-2',
        'lg:gap-y-0',
      )}
    >
      {parts.map(({book}) => (
        <BookLink className={clsx('h-48')} key={book.id} book={book} />
      ))}
    </div>
  </div>
);
