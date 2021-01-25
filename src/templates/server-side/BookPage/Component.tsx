import clsx from 'clsx';
import React from 'react';
import {Header, HeaderProps} from './Header';
import {SeriesSection, SeriesSectionProps} from './SeriesSection';

export type ComponentProps = {
  className?: string;
  book: HeaderProps['book'];
  series: SeriesSectionProps['series'][];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  book,
  series,
}) => (
  <main className={clsx(className)}>
    {children}
    <Header book={book} className={clsx('mb-8')} />
    {series.map((node) => (
      <SeriesSection key={node.id} series={node} />
    ))}
  </main>
);
