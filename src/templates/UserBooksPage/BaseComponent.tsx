import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {BookCoverLink} from '~/components/atoms/BookCoverLink';
import {Layout} from '~/components/atoms/Layout';
import {ProfileMenu} from '../UserPage/organisms/ProfileMenu';
import {TransformedProps} from './transform';

export type BaseComponentProps = Merge<
  TransformedProps,
  {
    className?: string;
    Header: React.VFC<{className?: string; count: number; displayName: string}>;
  }
>;
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  Header,
  children,
  displayName,
  picture,
  userName,
  books,
  booksCount,
  records,
  readBooks,
  readingBooks,
  stackedBooks,
  haveBooks,
  wishReadBooks,
  likedBooks,
}) => (
  <main className={clsx(className)}>
    {children}
    <Layout
      Side={({className, ...props}) => (
        <ProfileMenu
          {...props}
          className={clsx(className, 'shadow-md')}
          {...{
            displayName,
            userName,
            picture,
            records,
            readBooks,
            readingBooks,
            stackedBooks,
            haveBooks,
            wishReadBooks,
            likedBooks,
          }}
        />
      )}
      Main={({className, ...props}) => (
        <section
          className={clsx(className, 'bg-white', 'py-6', 'px-12', 'shadow-md')}
          {...props}
        >
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
      )}
    />
  </main>
);
