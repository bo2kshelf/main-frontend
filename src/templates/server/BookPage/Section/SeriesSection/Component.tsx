import clsx from 'clsx';
import React from 'react';
import {BooksSection} from '~/components/common/BooksSection';
import {SeriesHead} from '../Head';

export type ComponentProps = {
  className?: string;
  series: {
    id: string;
    title: string;
    books: {id: string; cover?: string; title: string}[];
  };
};
export const Component: React.FC<ComponentProps> = ({
  series,
  className,
  ...props
}) => (
  <BooksSection
    className={clsx(className)}
    Header={() => (
      <SeriesHead
        className={clsx('w-full', 'max-w-screen-xl', 'mx-auto', 'mb-4')}
        series={series}
      />
    )}
    books={series.books}
    {...props}
  />
);
Component.displayName = 'SeriesSection';
