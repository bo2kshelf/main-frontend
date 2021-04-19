import clsx from 'clsx';
import React from 'react';
import {
  HaveBooksItem,
  LikedBooksItem,
  ReadBooksItem,
  ReadingBooksItem,
  ReadRecordsItem,
  StackedBooksItem,
  WishReadBooksItem,
} from '../../molecules/MenuItem';
import {UserBox} from '../../molecules/UserBox';

export type ComponentProps = {
  className?: string;
  userName: string;
  displayName: string;
  picture: string;
  recordsCount: number;
  readBooksCount: number;
  readingBooksCount: number;
  stackedBooksCount: number;
  haveBooksCount: number;
  wishReadBooksCount: number;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  displayName,
  userName,
  picture,
  recordsCount,
  readBooksCount,
  readingBooksCount,
  stackedBooksCount,
  haveBooksCount,
  wishReadBooksCount,
}) => (
  <nav className={clsx(className, 'bg-white', 'flex', 'flex-col')}>
    <UserBox
      className={clsx('w-full')}
      displayName={displayName}
      userName={userName}
      picture={picture}
    />
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
      <ReadRecordsItem
        className={clsx('w-full')}
        userName={userName}
        count={recordsCount}
      />
      <ReadingBooksItem
        className={clsx('w-full')}
        userName={userName}
        count={readingBooksCount}
      />
      <HaveBooksItem
        className={clsx('w-full')}
        userName={userName}
        count={haveBooksCount}
      />
      <ReadBooksItem
        className={clsx('w-full')}
        userName={userName}
        count={readBooksCount}
      />
      <StackedBooksItem
        className={clsx('w-full')}
        userName={userName}
        count={stackedBooksCount}
      />
      <WishReadBooksItem
        className={clsx('w-full')}
        userName={userName}
        count={wishReadBooksCount}
      />
      <LikedBooksItem
        className={clsx('w-full')}
        userName={userName}
        count={wishReadBooksCount}
      />
    </div>
  </nav>
);
