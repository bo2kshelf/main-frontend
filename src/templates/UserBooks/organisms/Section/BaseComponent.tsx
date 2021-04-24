import clsx from 'clsx';
import React from 'react';
import {BookCoverLink} from '~/components/atoms/BookCoverLink';
import {PageCounter} from '../../molecules/PageCounter';

export type BaseComponentProps = {
  className?: string;
  displayName: string;
  userName: string;
  books: {id: string; title: string; cover?: string}[];
  booksCount: number;
  pageNumber: number;
  pagesCount: number;
  Header: React.VFC<{className?: string; count: number; displayName: string}>;
  Slider: React.VFC<{
    className?: string;
    userName: string;
    pageNumber: number;
    pagesCount: number;
  }>;
};

export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  books,
  booksCount,
  displayName,
  userName,
  pageNumber,
  pagesCount,
  Header,
  Slider,
}) => (
  <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
    <Header {...{displayName, count: booksCount}} />
    <div className={clsx('w-full', 'grid', 'grid-cols-4')}>
      <Slider
        className={clsx('col-start-2', 'col-span-2')}
        {...{userName, pageNumber, pagesCount}}
      />
      <PageCounter
        className={clsx('col-start-4', 'col-span-1')}
        {...{pagesCount, pageNumber}}
      />
    </div>
    {booksCount > 0 && (
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
