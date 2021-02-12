import clsx from 'clsx';
import React from 'react';
import {BookLink} from '~/components/common/BookLink';
import {BooksList} from '~/components/common/BooksList';
import {Head} from './Head';

export type ComponentProps = {
  className?: string;
  series: {
    id: string;
    title: string;
    books: {id: string; cover?: string; title: string}[];
  };
};
export const Component: React.FC<ComponentProps> = ({className, series}) => (
  <div className={clsx(className)}>
    <Head
      className={clsx('w-full', 'max-w-screen-xl', 'mx-auto', 'mb-4')}
      series={series}
    />
    <BooksList
      className={clsx(
        className,
        'grid',
        'grid-cols-5',
        'lg:grid-cols-10',
        'gap-4',
        'lg:gap-x-2',
        'lg:gap-y-0',
      )}
      books={series.books}
      BookLink={(props) => <BookLink className={clsx('h-48')} {...props} />}
    />
  </div>
);
Component.displayName = 'SeriesSection';
