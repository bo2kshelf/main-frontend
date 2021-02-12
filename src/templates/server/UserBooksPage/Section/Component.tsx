import clsx from 'clsx';
import React from 'react';
import {BookLink} from '~/components/common/BookLink';
import {BooksList} from '~/components/common/BooksList';

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
    <BooksList
      className={clsx('grid', 'grid-cols-6', 'lg:grid-cols-12', 'gap-2')}
      books={records.map(({book}) => book)}
      BookLink={(props) => <BookLink className={clsx('h-36')} {...props} />}
    />
  </section>
);
Component.displayName = 'ListSection';
