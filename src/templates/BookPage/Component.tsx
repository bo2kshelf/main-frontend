import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Header} from './Header';
import {AuthorsSection} from './Section/AuthorsSection';
import {PublisherSection} from './Section/PublishersSection';
import {SeriesSection} from './Section/SeriesSection';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  isbn,
  title,
  cover,
  subtitle,
  authors,
  series,
  publishers,
}) => (
  <main className={clsx(className, 'space-y-8')}>
    {children}
    <Header
      book={{title, isbn, cover, subtitle, authors}}
      className={clsx('mb-8')}
    />
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
