import {useRouter} from 'next/router';
import React from 'react';
import {UserStackedBooksPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';
import {StackedBooksHeader} from './Header';
import {getNextLink, getPreviousLink} from './link';

export type UserStackedBooksPageProps = UserStackedBooksPageQuery;
export const UserStackedBooksPage: React.FC<UserStackedBooksPageProps> = ({
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
        'stacked',
        query as {username: string; number?: string},
        books.hasPrevious,
      )}
      nextLink={getNextLink(
        'stacked',
        query as {username: string; number?: string},
        books.hasNext,
      )}
      count={books.count}
      skip={books.skip}
      limit={books.limit}
      Header={StackedBooksHeader}
    />
  );
};
