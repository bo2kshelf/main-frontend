import clsx from 'clsx';
import Link from 'next/link';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {BookLink} from '~/components/common/BookLink';
import {Icon} from '~/components/common/Icon';

export type ContainerProps = {
  className?: string;
  displayName: string;
  userName: string;
  picture: string;
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
  displayName,
  picture,
  userName,
  records: {count, hasNext, limit, nodes, skip},
}) => {
  const {t} = useTranslation();

  const [records] = useState(nodes);

  return (
    <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
      <p className={clsx('text-xl')}>
        {t('{{name}}の記録', {name: displayName})}
      </p>
      <div className={clsx('mt-4', 'flex', 'flex-col', 'divide-y')}>
        {records.map(({id, book: recordBook, user: recordUser, readAt}) => (
          <div key={id} className={clsx('flex', 'py-3')}>
            <BookLink className={clsx('w-1/8', 'h-28')} book={recordBook} />
            <div className={clsx('flex-grow', 'ml-4', 'flex', 'flex-col')}>
              <div className={clsx('flex', 'items-center')}>
                <p className={clsx('text-md')}>
                  <span className={clsx('font-medium', 'select-all')}>
                    {recordBook.title}
                  </span>
                  {recordBook.subtitle && (
                    <span
                      className={clsx('ml-1', 'select-all', 'text-gray-600')}
                    >
                      {recordBook.subtitle}
                    </span>
                  )}
                </p>
              </div>
              <div className={clsx('mt-1', 'flex', 'items-center')}>
                <Link href={`/users/${recordUser.userName}`}>
                  <a>
                    <Icon
                      className={clsx('w-6', 'h-6', 'rounded-full')}
                      picture={recordUser.picture}
                    />
                  </a>
                </Link>
                <Link href={`/users/${recordUser.displayName}`}>
                  <a
                    className={clsx(
                      'ml-1',
                      'text-sm',
                      'text-gray-500',
                      'hover:underline',
                    )}
                  >
                    {recordUser.displayName}
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
        ))}
      </div>
    </section>
  );
};
Container.displayName = 'RecordsSection';
