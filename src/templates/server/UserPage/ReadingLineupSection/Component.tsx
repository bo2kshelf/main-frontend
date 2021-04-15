import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {BooksList} from './BooksList';
import {MoreLikedBooksLink, MoreReadingBooksLink} from './MoreLink';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'title' | 'titleEmpty', string>;
  books: {id: string; title: string; cover?: string}[];
  userName: string;
  hasMore: boolean;
  MoreLink: typeof MoreLikedBooksLink | typeof MoreReadingBooksLink;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  books,
  userName,
  ...props
}) => (
  <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
    <div className={clsx('flex', 'items-center')}>
      <h2 className={clsx('flex-grow', 'text-xl', 'truncate')}>
        {books.length > 0 && i18n.title}
        {books.length === 0 && i18n.titleEmpty}
      </h2>
      {props.hasMore && (
        <props.MoreLink className={clsx('ml-2')} userName={userName} />
      )}
    </div>
    {books.length > 0 && <BooksList books={books} className={clsx('mt-6')} />}
  </section>
);

export type ComponentProps = {
  className?: string;
  userName: string;
  displayName: string;
  books: {id: string; title: string; cover?: string}[];
  hasMore: boolean;
};
export const Component: React.FC<ComponentProps> = ({
  displayName,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        title: t('{{name}}が読んでいる本', {name: displayName}),
        titleEmpty: t('{{name}}が読んでいる本はありません', {
          name: displayName,
        }),
      }}
      MoreLink={MoreReadingBooksLink}
    />
  );
};
