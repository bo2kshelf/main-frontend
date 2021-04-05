import {PageType} from './transform';

export type PreviousPageLink<Type extends PageType> =
  | {
      pathname: `/users/[username]/${Type}`;
      query: {username: string};
    }
  | {
      pathname: `/users/[username]/${Type}/[number]`;
      query: {username: string; number: number};
    };

export type NextPageLink<P extends PageType> = {
  pathname: `/users/[username]/${P}/[number]`;
  query: {username: string; number: number};
};

export const getPreviousPageLink = <Type extends PageType>(
  type: Type,
  {
    userName,
    hasPrevious,
    number,
  }: {userName: string; hasPrevious: boolean; number: number},
): PreviousPageLink<Type> | undefined => {
  if (!hasPrevious) return;
  const previousNumber = number - 1;
  if (previousNumber <= 0) return;
  return previousNumber === 1
    ? {
        pathname: `/users/[username]/${type}` as const,
        query: {username: userName},
      }
    : {
        pathname: `/users/[username]/${type}/[number]` as const,
        query: {username: userName, number: previousNumber},
      };
};

export const getNextPageLink = <Type extends PageType>(
  type: Type,
  {
    userName,
    hasNext,
    number,
  }: {userName: string; hasNext: boolean; number: number},
): NextPageLink<Type> | undefined => {
  if (!hasNext) return;
  return hasNext
    ? {
        pathname: `/users/[username]/${type}/[number]` as const,
        query: {username: userName, number: number ? number + 1 : 2},
      }
    : undefined;
};
