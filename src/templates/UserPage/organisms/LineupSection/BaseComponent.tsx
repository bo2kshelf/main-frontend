import clsx from 'clsx';
import React from 'react';
import {BookCoverLink} from '~/components/atoms/BookCoverLink';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'title' | 'titleEmpty', string>;
  books: {id: string; title: string; cover?: string}[];
  hasMore: boolean;
  MoreLink: React.VFC<{className?: string}>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  books,
  hasMore,
  MoreLink,
}) => (
  <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
    <div className={clsx('flex', 'items-center')}>
      <h2 className={clsx('flex-grow', 'text-xl', 'truncate')}>
        {books.length > 0 && i18n.title}
        {books.length === 0 && i18n.titleEmpty}
      </h2>
      {hasMore && <MoreLink className={clsx('ml-2')} />}
    </div>
    {books.length > 0 && (
      <div
        className={clsx(
          'mt-6',
          'grid',
          'grid-cols-2',
          'sm:grid-cols-4',
          'md:grid-cols-8',
          'gap-4',
        )}
      >
        {books.map((book) => (
          <BookCoverLink
            className={clsx('h-28', 'xl:h-32')}
            key={book.id}
            book={book}
          />
        ))}
      </div>
    )}
  </section>
);
