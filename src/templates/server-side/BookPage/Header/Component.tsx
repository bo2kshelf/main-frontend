import clsx from 'clsx';
import React from 'react';
import {BookCover} from '~/components/common/BookCover';
import {Profile, ProfileProps} from './Profile';

export type ComponentProps = {
  className?: string;
  book: ProfileProps['book'] & {cover: string | null};
};
export const Component: React.FC<ComponentProps> = ({className, book}) => (
  <header className={clsx(className, 'grid', 'grid-cols-4', 'gap-x-4')}>
    <div className={clsx('col-span-1')}>
      <BookCover
        className={clsx('h-64')}
        title={book.title}
        cover={book.cover}
      />
    </div>
    <Profile className={clsx('col-start-2', 'col-span-full')} book={book} />
  </header>
);
