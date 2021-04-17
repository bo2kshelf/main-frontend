import clsx from 'clsx';
import React from 'react';
import {
  DetailTableItemISBN,
  DetailTableItemISBNProps,
  DetailTableItemLanguages,
  DetailTableItemLanguagesProps,
  DetailTableItemPages,
  DetailTableItemPagesProps,
  DetailTableItemPublishedAt,
  DetailTableItemPublishedAtProps,
  DetailTableItemPublishers,
  DetailTableItemPublishersProps,
} from '../DetailsTableItem';

export type ComponentProps = {
  className?: string;
  isbn?: DetailTableItemISBNProps['isbn'];
  pages?: DetailTableItemPagesProps['pages'];
  publishers?: DetailTableItemPublishersProps['publishers'];
  publishedAt?: DetailTableItemPublishedAtProps['publishedAt'];
  languages?: DetailTableItemLanguagesProps['languages'];
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  isbn,
  pages,
  publishedAt,
  languages: language,
  publishers,
}) => (
  <table className={clsx(className, 'table-auto')}>
    {isbn && <DetailTableItemISBN isbn={isbn} />}
    {pages && <DetailTableItemPages pages={pages} />}
    {publishedAt && <DetailTableItemPublishedAt publishedAt={publishedAt} />}
    {publishers && publishers.length > 0 && (
      <DetailTableItemPublishers publishers={publishers} />
    )}
    {language && <DetailTableItemLanguages languages={language} />}
  </table>
);
