import clsx from 'clsx';
import React from 'react';
import {BookLink} from '~/components/common/BookLink';

export type ComponentProps = {
  className?: string;
  records: {
    book: {
      id: string;
      title: string;
      cover: string | null;
    };
  }[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  records,
}) => (
  <section className={clsx(className)}>
    {children}
    <div className={clsx('mt-4', 'grid', 'grid-cols-10', 'gap-x-2')}>
      {records.map(({book}) => (
        <BookLink key={book.id} book={book} className={clsx('h-48')} />
      ))}
    </div>
  </section>
);
