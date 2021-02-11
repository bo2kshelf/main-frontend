import clsx from 'clsx';
import React from 'react';
import {BookLink} from '~/components/common/BookLink';
import {HeaderProps} from './Header';

export type BaseComponentProps = {
  className?: string;
  user: HeaderProps['user'];
  records: {book: {id: string; title: string; cover: string | null}}[];
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
      <div
        className={clsx(
          'grid',
          'grid-cols-5',
          'lg:grid-cols-10',
          'gap-4',
          'lg:gap-x-2',
          'lg:gap-y-0',
        )}
      >
        {records.map(({book}) => (
          <BookLink key={book.id} book={book} className={clsx('h-48')} />
        ))}
      </div>
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
