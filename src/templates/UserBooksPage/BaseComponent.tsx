import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Layout} from '~/components/atoms/Layout';
import {ProfileMenu} from '../UserPage/organisms/ProfileMenu';
import {Section} from './organisms/Section';
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
        <Section
          {...props}
          className={clsx('shadow-md')}
          {...{booksCount, displayName, books, Header}}
        />
      )}
    />
  </main>
);
