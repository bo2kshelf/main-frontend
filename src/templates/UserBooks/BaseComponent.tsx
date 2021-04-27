import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Layout} from '~/components/atoms/Layout';
import {ProfileMenu} from '../User/organisms/ProfileMenu';
import {TransformedProps} from './transform';

export type BaseComponentProps = Merge<
  TransformedProps,
  {
    className?: string;
    Section: React.VFC<{
      className?: string;
      displayName: string;
      userName: string;
      books: {id: string; title: string; cover?: string}[];
      booksCount: number;
      pageNumber: number;
      pagesCount: number;
    }>;
  }
>;
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  Section,
  children,
  displayName,
  picture,
  userName,
  books,
  booksCount,
  pageNumber,
  pagesCount,
  records,
  readBooks,
  readingBooks,
  stackedBooks,
  haveBooks,
  wishBooks: wishReadBooks,
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
        <Section
          {...props}
          className={clsx('shadow-md')}
          {...{
            booksCount,
            displayName,
            userName,
            books,
            pagesCount,
            pageNumber,
          }}
        />
      )}
    />
  </main>
);
