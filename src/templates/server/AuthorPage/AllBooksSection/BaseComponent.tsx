import clsx from 'clsx';
import React from 'react';
import {BooksSection} from '~/components/common/BooksSection';

export type BaseComponentProps = {
  className?: string;
  books: {id: string; title: string; cover?: string}[];
  i18n: {
    title: string;
  };
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  i18n,
  ...props
}) => (
  <BooksSection
    Header={() => (
      <div className={clsx('w-full', 'max-w-screen-xl', 'mx-auto', 'mb-4')}>
        <h2 className={clsx('text-2xl')}>{i18n.title}</h2>
      </div>
    )}
    {...props}
  />
);
