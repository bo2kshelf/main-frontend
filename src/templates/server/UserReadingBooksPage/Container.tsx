import {useRouter} from 'next/router';
import React from 'react';
import {UserReadingBooksPageQuery} from '~/_generated/graphql-request';
import {getNextLink, getPreviousLink} from '../UserBooksPage';
import {Component} from '../UserBooksPage/Component';

export type ContainerProps = UserReadingBooksPageQuery;
export const Container: React.FC<ContainerProps> = ({
  account: {books, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      user={{...rest}}
      records={books.records.map(({book}) => ({
        book: {...book, cover: book.cover || null},
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
    />
  );
};
Container.displayName = 'UserReadingBooksPage';
