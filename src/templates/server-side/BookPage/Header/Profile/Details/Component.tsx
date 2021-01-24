import clsx from 'clsx';
import React from 'react';
import {
  DateDetail,
  DateDetailType,
  ISBNDetail,
  ISBNDetailType,
  LanguageDetail,
  LanguageDetailType,
  PagesDetail,
  PagesDetailType,
  PublisherDetail,
  PublisherDetailType,
} from './Detail';

export type ComponentProps = {
  className?: string;
  details: {
    isbn: ISBNDetailType['detail'] | null;
    pages: PagesDetailType['detail'] | null;
    date: DateDetailType['detail'] | null;
    publisher: PublisherDetailType['detail'] | null;
    language: LanguageDetailType['detail'] | null;
  };
};
export const Component: React.FC<ComponentProps> = ({className, details}) => (
  <table className={clsx(className, 'table-auto')}>
    <tbody>
      {details.isbn && <ISBNDetail detail={details.isbn} />}
      {details.pages && <PagesDetail detail={details.pages} />}
      {details.date && <DateDetail detail={details.date} />}
      {details.publisher && <PublisherDetail detail={details.publisher} />}
      {details.language && <LanguageDetail detail={details.language} />}
    </tbody>
  </table>
);
