import clsx from 'clsx';
import React from 'react';
import {Header, HeaderProps} from './Header';
import {
  PublisherSection,
  PublisherSectionProps,
} from './Section/PublishersSection';
import {SeriesSection, SeriesSectionProps} from './Section/SeriesSection';

export type ComponentProps = {
  className?: string;
  book: HeaderProps['book'];
  series: SeriesSectionProps['series'][];
  publishers: PublisherSectionProps['publisher'][];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  book,
  series,
  publishers,
}) => (
  <main className={clsx(className, 'space-y-8')}>
    {children}
    <Header book={book} className={clsx('mb-8')} />
    {series.map((node) => (
      <SeriesSection key={node.id} series={node} />
    ))}
    {publishers.map((node) => (
      <PublisherSection key={node.id} publisher={node} />
    ))}
  </main>
);
