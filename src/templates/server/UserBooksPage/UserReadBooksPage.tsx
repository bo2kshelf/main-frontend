import {useRouter} from 'next/router';
import React from 'react';
import {UserReadBooksPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';
import {ReadBooksHeader} from './Header';
import {getNextLink, getPreviousLink} from './link';

export type UserReadBooksPageProps = UserReadBooksPageQuery;
export const UserReadBooksPage: React.FC<UserReadBooksPageProps> = ({
  account: {books, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      account={{...rest}}
      records={books.records.map(({book}) => ({
        book: {...book, cover: book.cover || null},
      }))}
      previousLink={getPreviousLink(
        'read',
        query as {username: string; number?: string},
        books.hasPrevious,
      )}
      nextLink={getNextLink(
        'read',
        query as {username: string; number?: string},
        books.hasNext,
      )}
      count={books.count}
      skip={books.skip}
      limit={books.limit}
      Header={ReadBooksHeader}
    />
  );
};
