import {useRouter} from 'next/router';
import React from 'react';
import {UserStackedBooksPageQuery} from '~/_generated/graphql-request';
import {getNextLink, getPreviousLink} from '../UserBooksPage';
import {Component} from '../UserBooksPage/Component';

export type ContainerProps = UserStackedBooksPageQuery;
export const Container: React.FC<ContainerProps> = ({
  account: {stackedBooks, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      user={{...rest}}
      records={stackedBooks.records.map(({book}) => ({
        book: {...book, cover: book.cover || null},
      }))}
      previousLink={getPreviousLink(
        'stacked',
        query as {username: string; number?: string},
        stackedBooks.hasPrevious,
      )}
      nextLink={getNextLink(
        'stacked',
        query as {username: string; number?: string},
        stackedBooks.hasNext,
      )}
      count={stackedBooks.count}
      skip={stackedBooks.skip}
      limit={stackedBooks.limit}
    />
  );
};
Container.displayName = 'UserStackedBooksPage';
