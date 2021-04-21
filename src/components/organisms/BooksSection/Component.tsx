import clsx from 'clsx';
import React from 'react';
import {BookCoverLink} from '~/components/atoms/BookCoverLink';

export type ComponentProps = {
  className?: string;
  books: {id: string; title: string; subtitle?: string; cover?: string}[];
  i18n: Record<'title', string>;
  MoreDetailsLink: React.FC<{className?: string}>;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  books,
  MoreDetailsLink,
  i18n,
}) => (
  <section className={clsx(className, 'py-6', 'px-12', 'bg-white')}>
    <div className={clsx('flex', 'items-center')}>
      <h2 className={clsx('flex-grow', 'text-xl')}>{i18n.title}</h2>
      <MoreDetailsLink />
    </div>
    <div
      className={clsx(
        'mt-4',
        'gap-4',
        'grid',
        'grid-cols-2',
        'sm:grid-cols-4',
        'md:grid-cols-8',
      )}
    >
      {books.map((book) => (
        <BookCoverLink
          key={book.id}
          className={clsx('h-28', 'xl:h-32')}
          book={book}
        />
      ))}
    </div>
  </section>
);
