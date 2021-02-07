import {useRouter} from 'next/router';
import React from 'react';
import {UserStackedBooksPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = UserStackedBooksPageQuery;
export const Container: React.FC<ContainerProps> = ({
  account: {stackedBooks, ...rest},
  ...props
}) => {
  const {query} = useRouter();
  const {number, ...queryRest} = query as {username: string; number?: string};

  const previousNumber =
    number && Number.parseInt(number, 10) !== 2
      ? Number.parseInt(number, 10) - 1
      : undefined;
  const previousLink = stackedBooks.hasPrevious
    ? {
        pathname: previousNumber
          ? ('/users/[username]/stacked/[number]' as const)
          : ('/users/[username]/stacked' as const),
        query: previousNumber
          ? {...queryRest, number: previousNumber}
          : {...queryRest},
      }
    : undefined;
  const nextLink = stackedBooks.hasNext
    ? {
        pathname: '/users/[username]/stacked/[number]' as const,
        query: {
          ...queryRest,
          number: number ? Number.parseInt(number, 10) + 1 : 2,
        },
      }
    : undefined;

  return (
    <Component
      {...props}
      user={{...rest}}
      records={stackedBooks.records.map(({book}) => ({
        book: {...book, cover: book.cover || null},
      }))}
      previousLink={previousLink}
      nextLink={nextLink}
      count={stackedBooks.count}
      skip={stackedBooks.skip}
      limit={stackedBooks.limit}
    />
  );
};
Container.displayName = 'UserStackedBooksPage';
