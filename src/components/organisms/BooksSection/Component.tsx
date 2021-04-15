import clsx from 'clsx';
import React from 'react';
import {BookCoverLink} from '~/components/atoms/BookCoverLink';
import {BooksList} from '~/components/molecules/BooksList';

export type ComponentProps = {
  className?: string;
  books: {id: string; title: string; subtitle?: string; cover?: string}[];
  Header?: React.FC;
  noBooks?: boolean;
  NoBooksBox?: React.FC;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  books,
  Header,
  noBooks = false,
  NoBooksBox,
}) => (
  <section className={clsx(className)}>
    {Header && <Header />}
    {!noBooks && (
      <BooksList
        className={clsx(
          'grid',
          'grid-cols-3',
          'sm:grid-cols-4',
          'md:grid-cols-6',
          'lg:grid-cols-12',
          'gap-2',
          'lg:gap-1',
          'xl:gap-2',
        )}
        books={books}
        BookLink={(props) => (
          <BookCoverLink
            className={clsx('h-48', 'md:h-36', 'lg:h-28', 'xl:h-36')}
            {...props}
          />
        )}
      />
    )}
    {noBooks && NoBooksBox && <NoBooksBox />}
  </section>
);
Component.displayName = 'BooksSection';
