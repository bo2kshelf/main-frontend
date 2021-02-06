import clsx from 'clsx';
import React from 'react';
import {
  DateDetail,
  ISBNDetail,
  LanguageDetail,
  PagesDetail,
  PublisherDetail,
} from './DetailsItem';

const map = {
  isbn: ISBNDetail,
  pages: PagesDetail,
  date: DateDetail,
  publisher: PublisherDetail,
  language: LanguageDetail,
};

export type ComponentProps = {
  className?: string;
};
export const Component: React.FC<ComponentProps> = ({className, children}) => (
  <table
    className={clsx(
      className,
      'table-auto',
      'border',
      'border-gray-300',
      'border-separate',
    )}
  >
    <tbody>{children}</tbody>
  </table>
);
