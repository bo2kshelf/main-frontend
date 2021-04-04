import {useRouter} from 'next/router';
import React from 'react';
import {UserStackedBooksPageQuery} from '~/graphql/codegen/graphql-request';
import {Component} from './Component';
import {StackedBooksHeader} from './Header';
import {getNextLink, getPreviousLink} from './link';

export type UserStackedBooksPageProps = UserStackedBooksPageQuery;
export const UserStackedBooksPage: React.FC<UserStackedBooksPageProps> = ({
  user: {books, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      user={{...rest}}
      records={books.nodes.map(({book}) => ({
        book: {...book, cover: book.cover || undefined},
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
      Header={StackedBooksHeader}
    />
  );
};
