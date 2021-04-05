import clsx from 'clsx';
import React from 'react';
import {BooksSection} from '~/components/common/BooksSection';
import {HeaderProps} from './Header';
import {NoRecordsBoxProps} from './NoRecordBox';

export type BaseComponentProps = {
  className?: string;
  user: HeaderProps['user'];
  books: {id: string; title: string; cover?: string}[];
  hasNext: boolean;
  Header: React.FC<HeaderProps>;
  NoBooksBox: React.FC<NoRecordsBoxProps>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  books,
  Header,
  user,
  hasNext,
  NoBooksBox,
}) => (
  <BooksSection
    className={clsx(className)}
    books={books}
    Header={(props) => (
      <Header
        {...props}
        className={clsx('mb-4')}
        user={user}
        hasMore={hasNext}
      />
    )}
    noBooks={books.length === 0}
    NoBooksBox={(props) => (
      <NoBooksBox {...props} className={clsx('h-32')} user={user} />
    )}
  />
);
