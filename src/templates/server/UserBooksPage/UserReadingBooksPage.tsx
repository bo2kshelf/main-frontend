import {useRouter} from 'next/router';
import React from 'react';
import {UserReadingBooksPageQuery} from '~/graphql/codegen/graphql-request';
import {Component} from './Component';
import {ReadingBooksHeader} from './Header';
import {getNextLink, getPreviousLink} from './link';

export type UserReadingBooksPageProps = UserReadingBooksPageQuery;
export const UserReadingBooksPage: React.FC<UserReadingBooksPageProps> = ({
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
      Header={ReadingBooksHeader}
    />
  );
};
