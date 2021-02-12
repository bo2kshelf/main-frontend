import clsx from 'clsx';
import React from 'react';
import {BookLink} from '~/components/common/BookLink';

export type ComponentProps = {
  className?: string;
  records: {
    book: {
      id: string;
      title: string;
      cover?: string;
    };
  }[];
};
export const Component: React.FC<ComponentProps> = ({className, records}) => (
  <section className={clsx(className)}>
    <div
      className={clsx(
        'mt-4',
        'grid',
        'grid-cols-5',
        'lg:grid-cols-12',
        'gap-4',
        'lg:gap-x-2',
        'lg:gap-y-4',
      )}
    >
      {records.map(({book}) => (
        <BookLink key={book.id} book={book} className={clsx('h-36')} />
      ))}
    </div>
  </section>
);
Component.displayName = 'ListSection';
