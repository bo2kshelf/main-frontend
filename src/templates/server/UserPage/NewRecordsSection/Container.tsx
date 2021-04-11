import clsx from 'clsx';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useInView} from 'react-intersection-observer';
import {BookLink} from '~/components/common/BookLink';
import {Icon} from '~/components/common/Icon';
import {useMoreRecordsInUserPageLazyQuery} from '~/graphql/codegen/apollo';

export type ContainerProps = {
  className?: string;
  userName: string;
  displayName: string;
  records: {
    count: number;
    hasNext: boolean;
    skip: number;
    limit: number;
    nodes: {
      id: string;
      readAt?: string;
      user: {userName: string; picture: string; displayName: string};
      book: {id: string; title: string; subtitle?: string; cover?: string};
    }[];
  };
};
export const Container: React.FC<ContainerProps> = ({
  className,
  userName,
  displayName,
  records: givenRecords,
}) => {
  const {t} = useTranslation();
  const [records, setRecords] = useState(givenRecords.nodes);
  const [hasNext, sethasNext] = useState(givenRecords.hasNext);
  const [getMoreRecords, {loading, data}] = useMoreRecordsInUserPageLazyQuery();

  useEffect(() => {
    if (!loading && data) {
      setRecords((previous) => [
        ...previous,
        ...data.user.records.nodes.map(({id, readAt, book, user}) => ({
          id,
          readAt,
          user: {
            userName: user.userName,
            displayName: user.displayName,
            picture: user.picture,
          },
          book: {
            id: book.id,
            title: book.title,
            subtitle: book.subtitle || undefined,
            cover: book.cover || undefined,
          },
        })),
      ]);
      sethasNext(data.user.records.hasNext);
    }
  }, [loading, data]);

  return (
    <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
      <p className={clsx('text-xl')}>
        {t('{{name}}の記録', {name: displayName})}
      </p>
      <div className={clsx('mt-4', 'flex', 'flex-col', 'divide-y')}>
        {records.map((record) => (
          <Record key={record.id} {...record} className={clsx()} />
        ))}
        {hasNext && (
          <More
            className={clsx('w-full')}
            loading={loading}
            onClicked={() => {
              if (!loading && hasNext)
                getMoreRecords({
                  variables: {
                    userName,
                    skip: records.length,
                    limit: givenRecords.limit,
                  },
                });
            }}
          />
        )}
      </div>
    </section>
  );
};
Container.displayName = 'RecordsSection';

const More: React.FC<{
  className?: string;
  loading: boolean;
  onClicked(): void;
}> = ({className, loading, onClicked}) => {
  const {ref, inView} = useInView({delay: 100, threshold: 0.75});
  const {t} = useTranslation();

  useEffect(() => {
    if (inView) onClicked();
  });

  return (
    <div
      className={clsx(className, 'flex', 'justify-center', 'py-4')}
      ref={ref}
    >
      {loading && <span>{t('common:loading')}</span>}
      {!loading && <span>{t('もっと見る')}</span>}
    </div>
  );
};

const Record: React.FC<{
  className?: string;
  id: string;
  readAt?: string;
  user: {userName: string; picture: string; displayName: string};
  book: {id: string; title: string; subtitle?: string; cover?: string};
}> = ({className, book, user, id, readAt}) => {
  const {t} = useTranslation();
  return (
    <div className={clsx(className, 'flex', 'py-3')}>
      <BookLink className={clsx('w-1/8', 'h-28')} book={book} />
      <div className={clsx('flex-grow', 'ml-4', 'flex', 'flex-col')}>
        <div className={clsx('flex', 'items-center')}>
          <p className={clsx('text-md')}>
            <span className={clsx('font-medium', 'select-all')}>
              {book.title}
            </span>
            {book.subtitle && (
              <span className={clsx('ml-1', 'select-all', 'text-gray-600')}>
                {book.subtitle}
              </span>
            )}
          </p>
        </div>
        <div className={clsx('mt-1', 'flex', 'items-center')}>
          <Link href={`/users/${user.userName}`}>
            <a>
              <Icon
                className={clsx('w-6', 'h-6', 'rounded-full')}
                picture={user.picture}
              />
            </a>
          </Link>
          <Link href={`/users/${user.displayName}`}>
            <a
              className={clsx(
                'ml-1',
                'text-sm',
                'text-gray-500',
                'hover:underline',
              )}
            >
              {user.displayName}
            </a>
          </Link>
          <Link href={`/records/${id}`}>
            <a
              className={clsx(
                'ml-2',
                'text-sm',
                'text-gray-500',
                'hover:underline',
              )}
            >
              <time>
                {t('format:record_date', {
                  date: readAt ? new Date(readAt) : undefined,
                  context: readAt ? undefined : 'unknown',
                })}
              </time>
            </a>
          </Link>
        </div>
        <div className={clsx('flex-grow')} />
      </div>
    </div>
  );
};
