export type PageType = 'stacked' | 'read' | 'reading' | 'have' | 'wish';
export type PagePath = `/users/[username]/${PageType}`;
export type NumberedPagePath = `${PagePath}/[number]`;

export type PreviousPageLink = {
  pathname: PagePath | NumberedPagePath;
  query: {username: string; number?: number};
};
export type NextPageLink = {
  pathname: PagePath | NumberedPagePath;
  query: {username: string; number?: number};
};

export function getPreviousLink(
  page: PageType,
  {username, number}: {username: string; number?: string},
  hasPrevious: boolean,
): PreviousPageLink | undefined {
  if (!(hasPrevious && number)) return;

  const previousNumber =
    Number.parseInt(number, 10) === 2
      ? undefined
      : Number.parseInt(number, 10) - 1;
  return hasPrevious
    ? {
        pathname: previousNumber
          ? (`/users/[username]/${page}/[number]` as const)
          : (`/users/[username]/${page}` as const),
        query: previousNumber ? {username, number: previousNumber} : {username},
      }
    : undefined;
}

export function getNextLink(
  page: PageType,
  {username, number}: {username: string; number?: string},
  hasNext: boolean,
): NextPageLink | undefined {
  if (!hasNext) return;

  return hasNext
    ? {
        pathname: `/users/[username]/${page}/[number]` as const,
        query: {username, number: number ? Number.parseInt(number, 10) + 1 : 2},
      }
    : undefined;
}
