import clsx from 'clsx';
import React from 'react';
import {ISBNDetail, PublisherDetail} from './DetailsItem';

export type ComponentProps = {
  className?: string;
  isbn?: string;
  publishers?: {id: string; name: string}[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  isbn,
  publishers,
}) => (
  <table
    className={clsx(
      className,
      'table-auto',
      'border',
      'border-gray-300',
      'border-separate',
    )}
  >
    <tbody>
      {isbn && <ISBNDetail isbn={isbn} />}
      {publishers && publishers.length > 0 && (
        <PublisherDetail publishers={publishers} />
      )}
    </tbody>
  </table>
);
