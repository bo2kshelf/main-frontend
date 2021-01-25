import clsx from 'clsx';
import React from 'react';
import {SeriesSection, SeriesSectionProps} from '../BookPage/SeriesSection';
import {AllBooksSection, AllBooksSectionProps} from './AllBooksSection';

export type ComponentProps = {
  className?: string;
  author: AllBooksSectionProps['author'];
  books: AllBooksSectionProps['books'];
  series: SeriesSectionProps['series'][];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  author,
  books,
  series,
}) => (
  <main className={clsx(className)}>
    {children}
    <AllBooksSection author={author} className={clsx('w-full')} books={books} />
    {series.map((node) => (
      <SeriesSection
        className={clsx('w-full', 'mt-8')}
        key={node.id}
        series={node}
      />
    ))}
  </main>
);
