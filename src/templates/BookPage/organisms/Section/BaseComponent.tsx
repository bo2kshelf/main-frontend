import clsx from 'clsx';
import React from 'react';
import {BookCoverLink} from '~/components/atoms/BookCoverLink';

export type BaseComponentProps = {
  className?: string;
  books: {id: string; title: string; subtitle?: string; cover?: string}[];
  i18n: Record<'title', string>;
  Link: React.FC;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  books,
  Link,
  i18n,
}) => (
  <section className={clsx(className, 'px-8', 'py-6')}>
    <Link>
      <h2 className={clsx('text-2xl')}>{i18n.title}</h2>
    </Link>
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
          className={clsx('h-48', 'md:h-36', 'lg:h-28', 'xl:h-36')}
          book={book}
        />
      ))}
    </div>
  </section>
);
