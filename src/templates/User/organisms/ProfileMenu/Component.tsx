import clsx from 'clsx';
import React from 'react';
import {
  HaveBooksItem,
  LikedBooksItem,
  ReadBooksItem,
  ReadingBooksItem,
  ReadRecordsItem,
  StackedBooksItem,
  WishBooksItem,
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
  wishBooksCount: number;
  likedBooksCount: number;
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
  wishBooksCount,
  likedBooksCount,
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
      <WishBooksItem
        className={clsx('w-full')}
        userName={userName}
        count={wishBooksCount}
      />
      <LikedBooksItem
        className={clsx('w-full')}
        userName={userName}
        count={likedBooksCount}
      />
    </div>
  </nav>
);
