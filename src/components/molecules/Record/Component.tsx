import clsx from 'clsx';
import React from 'react';
import {
  LinkRecordsIndexPage,
  LinkUsersIndexPage,
} from '~/components/atoms/Link';
import {ReadAt} from '~/components/atoms/ReadAt';
import {UserIconLink} from '~/components/atoms/UserIconLink';
import {BookLink} from '~/components/molecules/BookLink';

export type ComponentProps = {
  className?: string;
  id: string;
  readAt?: string;
  user: {userName: string; picture: string; displayName: string};
  book: {id: string; title: string; subtitle?: string; cover?: string};
};
export const Component: React.FC<ComponentProps> = ({
  className,
  id,
  book,
  user,
  readAt,
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
        <UserIconLink
          className={clsx('w-6', 'h-6')}
          picture={user.picture}
          userName={user.userName}
        />
        <LinkUsersIndexPage
          username={user.userName}
          className={clsx(
            'ml-1',
            'text-sm',
            'text-gray-500',
            'hover:underline',
          )}
        >
          {user.displayName}
        </LinkUsersIndexPage>
        <LinkRecordsIndexPage
          id={id}
          className={clsx(
            'ml-2',
            'text-sm',
            'text-gray-500',
            'hover:underline',
          )}
        >
          <ReadAt readAt={readAt} />
        </LinkRecordsIndexPage>
      </div>
      <div className={clsx('flex-grow')} />
    </div>
  </div>
);
