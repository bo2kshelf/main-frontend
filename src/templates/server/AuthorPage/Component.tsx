import clsx from 'clsx';
import React from 'react';
import {SeriesSection, SeriesSectionProps} from '../BookPage/SeriesSection';
import {AllBooksSection, AllBooksSectionProps} from './AllBooksSection';

export type ComponentProps = {
  className?: string;
  author: AllBooksSectionProps['author'];
  allBooks: AllBooksSectionProps['books'];
  series: SeriesSectionProps['series'][];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  author,
  allBooks,
  series,
}) => (
  <main className={clsx(className, 'space-y-8')}>
    {children}
    <AllBooksSection
      author={author}
      className={clsx('w-full')}
      books={allBooks}
    />
    {series.map((node) => (
      <SeriesSection className={clsx('w-full')} key={node.id} series={node} />
    ))}
  </main>
);
