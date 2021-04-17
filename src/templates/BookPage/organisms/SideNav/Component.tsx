import clsx from 'clsx';
import React from 'react';
import {BookCover} from '~/components/atoms/BookCover';
import {AuthorsTable} from '../../molecules/AuthorsTable';
import {DetailsTable} from '../../molecules/DetailsTable';

export type ComponentProps = {
  className?: string;
  title: string;
  subtitle?: string;
  cover?: string;
  isbn?: string;
  pages?: number;
  authors: {id: string; name: string}[];
  publishers?: {id: string; name: string}[];
  publishedAt?: string;
  languages?: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  subtitle,
  cover,
  authors,
  isbn,
  pages,
  publishedAt,
  publishers,
  languages,
}) => (
  <nav className={clsx(className)}>
    <div className={clsx('py-8', 'bg-white')}>
      <BookCover className={clsx('h-56')} {...{title, cover, subtitle}} />
    </div>
    <div
      className={clsx(
        'w-full',
        'px-6',
        'py-4',
        'bg-white',
        'border-t',
        'border-gray-100',
      )}
    >
      <h1 className={clsx('flex', 'flex-col')}>
        <span className={clsx('text-lg', 'font-bold')}>{title}</span>
        {subtitle && (
          <span className={clsx('mt-1', 'text-sm', 'text-gray-600')}>
            {subtitle}
          </span>
        )}
      </h1>
    </div>
    <div
      className={clsx(
        'w-full',
        'px-6',
        'py-4',
        'bg-white',
        'border-t',
        'border-gray-100',
      )}
    >
      <AuthorsTable authors={authors} />
    </div>
    <div
      className={clsx(
        'w-full',
        'px-6',
        'py-4',
        'bg-white',
        'border-t',
        'border-gray-100',
      )}
    >
      <DetailsTable
        className={clsx('w-full')}
        {...{isbn, pages, publishedAt, publishers, languages}}
      />
    </div>
  </nav>
);
