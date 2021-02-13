import {useRouter} from 'next/router';
import React from 'react';
import {UserHaveBooksPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';
import {HaveBooksHeader} from './Header';
import {getNextLink, getPreviousLink} from './link';

export type UserHaveBooksPageProps = UserHaveBooksPageQuery;
export const UserHaveBooksPage: React.FC<UserHaveBooksPageProps> = ({
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
        'have',
        query as {username: string; number?: string},
        books.hasPrevious,
      )}
      nextLink={getNextLink(
        'have',
        query as {username: string; number?: string},
        books.hasNext,
      )}
      count={books.count}
      skip={books.skip}
      limit={books.limit}
      Header={HaveBooksHeader}
    />
  );
};
