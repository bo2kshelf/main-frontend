import {switcher} from './switcher';

describe('UserBooksPage/molecules/Slider/switcher', () => {
  it.each([
    [{pageNumber: 1, pagesCount: 1}, {leftest: false}],
    [
      {pageNumber: 1, pagesCount: 2},
      {leftest: false, right: 2},
    ],
    [
      {pageNumber: 2, pagesCount: 2},
      {leftest: false, left: 1},
    ],
    [
      {pageNumber: 1, pagesCount: 3},
      {leftest: false, right: 2, rightest: 3},
    ],
    [
      {pageNumber: 2, pagesCount: 3},
      {leftest: false, left: 1, right: 3},
    ],
    [
      {pageNumber: 3, pagesCount: 3},
      {leftest: true, left: 2},
    ],
    [
      {pageNumber: 1, pagesCount: 5},
      {leftest: false, right: 2, rightest: 5},
    ],
    [
      {pageNumber: 2, pagesCount: 5},
      {leftest: false, left: 1, right: 3, rightest: 5},
    ],
    [
      {pageNumber: 3, pagesCount: 5},
      {leftest: true, left: 2, right: 4, rightest: 5},
    ],
    [
      {pageNumber: 4, pagesCount: 5},
      {leftest: true, left: 3, right: 5},
    ],
    [
      {pageNumber: 5, pagesCount: 5},
      {leftest: true, left: 4},
    ],
  ])('正常に判定する %j', (args, expected) => {
    const actual = switcher(args);
    expect(actual).toStrictEqual(expected);
  });
});
