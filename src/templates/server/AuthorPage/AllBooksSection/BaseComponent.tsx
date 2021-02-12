import clsx from 'clsx';
import React from 'react';
import {BookLink} from '~/components/common/BookLink';
import {BooksList} from '~/components/common/BooksList';

export type BaseComponentProps = {
  className?: string;
  books: ComponentProps['books'];
  i18n: {
    title: string;
  };
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  books,
}) => (
  <div className={clsx(className)}>
    <div className={clsx('w-full', 'max-w-screen-xl', 'mx-auto', 'mb-4')}>
      <h2 className={clsx('text-2xl')}>{i18n.title}</h2>
    </div>
    <BooksList
      className={clsx(
        className,
        'grid',
        'grid-cols-5',
        'lg:grid-cols-10',
        'gap-4',
        'lg:gap-x-2',
        'lg:gap-y-0',
      )}
      books={books}
      BookLink={(props) => <BookLink className={clsx('h-48')} {...props} />}
    />
  </div>
);
