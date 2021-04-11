import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {BookLink} from '~/components/common/BookLink';
import {Icon} from '~/components/common/Icon';
import {ReadAt} from './ReadAt';

export type ComponentProps = {
  className?: string;
  readAt?: string;
  user: {
    userName: string;
    picture: string;
    displayName: string;
  };
  book: {
    id: string;
    title: string;
    subtitle?: string;
    cover?: string;
  };
  userLink: string;
  recordLink: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  book,
  user,
  readAt,
  recordLink,
  userLink,
}) => (
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
        <Link href={userLink}>
          <a>
            <Icon
              className={clsx('w-6', 'h-6', 'rounded-full')}
              picture={user.picture}
            />
          </a>
        </Link>
        <Link href={userLink}>
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
        <Link href={recordLink}>
          <a
            className={clsx(
              'ml-2',
              'text-sm',
              'text-gray-500',
              'hover:underline',
            )}
          >
            <ReadAt readAt={readAt} />
          </a>
        </Link>
      </div>
      <div className={clsx('flex-grow')} />
    </div>
  </div>
);
