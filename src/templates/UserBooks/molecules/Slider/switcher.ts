export const switcher = ({
  pagesCount,
  pageNumber,
}: {
  pagesCount: number;
  pageNumber: number;
}) => ({
  ...{leftest: pageNumber !== 1 && pageNumber !== 2},
  ...(pagesCount >= 2 && pageNumber > 1 && {left: pageNumber - 1}),
  ...(pagesCount >= 2 && pageNumber < pagesCount && {right: pageNumber + 1}),
  ...(pagesCount >= 3 && pageNumber < pagesCount - 1 && {rightest: pagesCount}),
});
