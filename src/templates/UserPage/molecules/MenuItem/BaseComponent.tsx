import clsx from 'clsx';
import React from 'react';
import {IconComponentType} from '~/components/atoms/Icon';
import {
  LinkUsersHaveIndexPage,
  LinkUsersLikedIndexPage,
  LinkUsersReadIndexPage,
  LinkUsersReadingIndexPage,
  LinkUsersRecordsIndexPage,
  LinkUserWishIndexPage,
} from '~/components/atoms/Link';

export type BaseComponentProps = {
  className?: string;
  userName: string;
  i18n: Record<'text' | 'count', string>;
  Icon: IconComponentType;
  Link:
    | typeof LinkUsersRecordsIndexPage
    | typeof LinkUsersHaveIndexPage
    | typeof LinkUsersLikedIndexPage
    | typeof LinkUsersReadingIndexPage
    | typeof LinkUsersReadIndexPage
    | typeof LinkUsersRecordsIndexPage
    | typeof LinkUserWishIndexPage;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  userName,
  i18n,
  Link,
  Icon,
}) => {
  return (
    <Link
      username={userName}
      className={clsx(
        className,
        'block',
        'py-4',
        'px-8',
        'bg-white',
        'hover:bg-blue-400',
        'group',
        'flex',
        'items-center',
      )}
    >
      <Icon className={clsx('text-gray-500', 'group-hover:text-white')} />
      <span
        className={clsx(
          'flex-grow',
          'ml-6',
          'text-keft',
          'group-hover:text-white',
        )}
      >
        {i18n.text}
      </span>
      <span
        className={clsx(
          'text-gray-400',
          'group-hover:text-white',
          'text-right',
          'font-mono',
        )}
      >
        {i18n.count}
      </span>
    </Link>
  );
};
