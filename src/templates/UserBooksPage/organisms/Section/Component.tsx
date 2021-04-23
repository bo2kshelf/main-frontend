import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {BookCoverLink} from '~/components/atoms/BookCoverLink';

export type ComponentProps = {
  className?: string;
  displayName: string;
  books: {id: string; title: string; cover?: string}[];
  booksCount: number;
  Header: React.VFC<{className?: string; count: number; displayName: string}>;
};

export const Component: React.FC<ComponentProps> = ({
  className,
  Header,
  books,
  booksCount,
  displayName,
}) => {
  const {t} = useTranslation();
  return (
    <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
      <Header {...{displayName, count: booksCount}} />{' '}
      {books.length > 0 && (
        <div
          className={clsx(
            'mt-6',
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
      )}
    </section>
  );
};
