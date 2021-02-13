import {useRouter} from 'next/router';
import React from 'react';
import {UserReadingBooksPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';
import {ReadingBooksHeader} from './Header';
import {getNextLink, getPreviousLink} from './link';

export type UserReadingBooksPageProps = UserReadingBooksPageQuery;
export const UserReadingBooksPage: React.FC<UserReadingBooksPageProps> = ({
  account: {books, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      account={{...rest}}
      records={books.records.map(({book}) => ({
        book: {...book, cover: book.cover || undefined},
      }))}
      previousLink={getPreviousLink(
        'reading',
        query as {username: string; number?: string},
        books.hasPrevious,
      )}
      nextLink={getNextLink(
        'reading',
        query as {username: string; number?: string},
        books.hasNext,
      )}
      count={books.count}
      skip={books.skip}
      limit={books.limit}
      Header={ReadingBooksHeader}
    />
  );
};
