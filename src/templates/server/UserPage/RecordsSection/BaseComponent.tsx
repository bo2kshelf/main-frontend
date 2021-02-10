import clsx from 'clsx';
import React from 'react';
import {BookLink} from '~/components/common/BookLink';
import {HeaderProps} from './Header';

export type BaseComponentProps = {
  className?: string;
  user: HeaderProps['user'];
  records: {book: {id: string; title: string; cover: string | null}}[];
  hasNext: boolean;
  Header: React.FC<HeaderProps>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  records,
  Header,
  user,
  hasNext,
}) => (
  <section className={clsx(className)}>
    <Header user={user} hasMore={hasNext} />
    <div
      className={clsx(
        'mt-4',
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
  </section>
);
