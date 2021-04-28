import clsx from 'clsx';
import React from 'react';
import {
  TableItemCount,
  TableItemReadAt,
  TableItemTitle,
} from '../../atoms/DetailsTableItem';

export type ComponentProps = {
  className?: string;
  book: {
    id: string;
    title: string;
    subtitle?: string;
  };
  readAt?: string;
  count: number;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  book,
  readAt,
  count,
}) => (
  <table className={clsx(className)}>
    <tbody>
      <TableItemTitle
        {...{id: book.id, title: book.title, subtitle: book.subtitle}}
      />
      <TableItemReadAt readAt={readAt} />
      <TableItemCount count={count} />
    </tbody>
  </table>
);
