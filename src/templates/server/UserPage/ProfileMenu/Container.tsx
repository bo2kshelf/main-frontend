import {
  faBook,
  faBookmark,
  faBookReader,
  faEye,
  faLayerGroup,
  faStar,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from '~/components/common/Icon';

export type ContainerProps = {
  className?: string;
  userName: string;
  displayName: string;
  picture: string;
  records: {count: number};
  readBooks: {count: number};
  readingBooks: {count: number};
  stackedBooks: {count: number};
  haveBooks: {count: number};
  wishReadBooks: {count: number};
};
export const Container: React.FC<ContainerProps> = ({
  className,
  displayName,
  userName,
  picture,
  records,
  readBooks,
  readingBooks,
  stackedBooks,
  haveBooks,
  wishReadBooks,
}) => {
  const {t} = useTranslation();
  return (
    <div className={clsx(className, 'bg-white', 'flex', 'flex-col')}>
      <div
        className={clsx(
          'w-full',
          'bg-gray-800',
          'py-8',
          'flex',
          'flex-col',
          'items-center',
        )}
      >
        <NextLink href={`/users/${userName}`}>
          <a>
            <Icon picture={picture} className={clsx('w-24', 'h-24')} />
          </a>
        </NextLink>
        <div className={clsx('mt-4', 'flex', 'flex-col', 'items-center')}>
          <span className={clsx('text-lg', 'text-gray-100', 'select-all')}>
            {displayName}
          </span>
          <span className={clsx('text-md', 'text-gray-400', 'select-all')}>
            {userName}
          </span>
        </div>
      </div>
      <div
        className={clsx(
          'w-full',
          'flex',
          'flex-col',
          'items-center',
          'divide-y',
          'divide-gray-50',
        )}
      >
        <MenuButton
          text={t('common:read_records')}
          icon={faEye}
          href={`/users/${userName}/records`}
          count={records.count}
        />
        <MenuButton
          icon={faBookReader}
          text={t('common:reading_books')}
          href={`/users/${userName}/reading`}
          count={readingBooks.count}
        />
        <MenuButton
          icon={faBook}
          text={t('common:have_books')}
          href={`/users/${userName}/have`}
          count={haveBooks.count}
        />
        <MenuButton
          text={t('common:read_books')}
          icon={faBookmark}
          href={`/users/${userName}/read`}
          count={readBooks.count}
        />
        <MenuButton
          icon={faLayerGroup}
          text={t('common:stacked_books')}
          href={`/users/${userName}/stacked`}
          count={stackedBooks.count}
        />
        <MenuButton
          icon={faStar}
          text={t('common:wish_read_books')}
          href={`/users/${userName}/wish`}
          count={wishReadBooks.count}
        />
      </div>
    </div>
  );
};
Container.displayName = 'ProfileMenu';

export const MenuButton: React.FC<{
  className?: string;
  text: string;
  href: string;
  icon: IconDefinition;
  count: number;
}> = ({className, href, text, icon, count}) => {
  return (
    <NextLink href={href} passHref>
      <a
        className={clsx(
          className,
          'w-full',
          'py-4',
          'px-8',
          'hover:bg-blue-400',
          'group',
          'flex',
          'items-center',
        )}
      >
        <FontAwesomeIcon
          className={clsx('text-gray-500', 'group-hover:text-white')}
          icon={icon}
          fixedWidth
        />
        <span
          className={clsx(
            'flex-grow',
            'ml-6',
            'text-keft',
            'group-hover:text-white',
          )}
        >
          {text}
        </span>
        <span
          className={clsx(
            'text-gray-400',
            'group-hover:text-white',
            'text-right',
            'font-mono',
          )}
        >
          {count}
        </span>
      </a>
    </NextLink>
  );
};
