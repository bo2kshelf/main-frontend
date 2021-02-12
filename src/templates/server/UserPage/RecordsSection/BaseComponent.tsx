import clsx from 'clsx';
import React from 'react';
import {BookLink} from '~/components/common/BookLink';
import {BooksList} from '~/components/common/BooksList';
import {HeaderProps} from './Header';

export type BaseComponentProps = {
  className?: string;
  user: HeaderProps['user'];
  records: {book: {id: string; title: string; cover?: string}}[];
  hasNext: boolean;
  i18n: Record<'noRecord', string>;
  Header: React.FC<HeaderProps>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  records,
  Header,
  user,
  i18n,
  hasNext,
}) => (
  <section className={clsx(className)}>
    <Header className={clsx('mb-4')} user={user} hasMore={hasNext} />
    {records.length > 0 && (
      <BooksList
        className={clsx(
          'p-4',
          'bg-gray-100',
          'grid',
          'grid-cols-6',
          'lg:grid-cols-12',
          'gap-2',
        )}
        books={records.map(({book}) => book)}
        BookLink={(props) => <BookLink className={clsx('h-32')} {...props} />}
      />
    )}
    {records.length === 0 && (
      <div
        className={clsx(
          'h-36',
          'bg-gray-200',
          'flex',
          'items-center',
          'justify-center',
        )}
      >
        <p className={clsx('text-xl', 'text-gray-400', 'font-bold')}>
          {i18n.noRecord}
        </p>
      </div>
    )}
  </section>
);
