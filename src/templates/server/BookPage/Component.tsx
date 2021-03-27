import clsx from 'clsx';
import React from 'react';
import {Header, HeaderProps} from './Header';
import {AuthorsSection, AuthorsSectionProps} from './Section/AuthorsSection';
import {
  PublisherSection,
  PublisherSectionProps,
} from './Section/PublishersSection';
import {SeriesSection, SeriesSectionProps} from './Section/SeriesSection';

export type ComponentProps = {
  className?: string;
  book: HeaderProps['book'];
  authors: AuthorsSectionProps['author'][];
  series: SeriesSectionProps['series'][];
  publishers: PublisherSectionProps['publisher'][];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  book,
  authors,
  series,
  publishers,
}) => (
  <main className={clsx(className, 'space-y-8')}>
    {children}
    <Header book={book} className={clsx('mb-8')} />
    {series.map((node) => (
      <SeriesSection key={node.id} series={node} />
    ))}
    {authors.map((node) => (
      <AuthorsSection key={node.id} author={node} />
    ))}
    {publishers.map((node) => (
      <PublisherSection key={node.id} publisher={node} />
    ))}
  </main>
);
