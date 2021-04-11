import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {BookLink} from '~/components/common/BookLink';

export type ContainerProps = {
  className?: string;
  displayName: string;
  readingBooks: {
    count: number;
    books: {id: string; title: string; cover?: string}[];
    hasNext: boolean;
  };
};
export const Container: React.FC<ContainerProps> = ({
  className,
  displayName,
  readingBooks,
}) => {
  const {t} = useTranslation();
  return (
    <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
      <p className={clsx('text-xl')}>
        {t('{{name}}が読んでいる本', {name: displayName})}
      </p>
      <div
        className={clsx(
          'mt-4',
          'grid',
          'grid-cols-2',
          'sm:grid-cols-4',
          'md:grid-cols-8',
          'gap-4',
        )}
      >
        {readingBooks.books.map((book) => (
          <BookLink
            className={clsx('h-28', 'xl:h-32')}
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};
Container.displayName = 'ReadingSection';
