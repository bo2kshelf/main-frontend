import clsx from 'clsx';
import React from 'react';
import {DetailsTable} from '../../molecules/DetailsTable';
import {Review} from '../../molecules/Review';
import {UserProfile} from '../../molecules/UserProfile';

export type ComponentProps = {
  className?: string;
  readAt: string;
  count: number;
  book: {
    id: string;
    title: string;
    subtitle?: string;
  };
  user: {
    displayName: string;
    uniqueName: string;
    picture: string;
  };
  review?: string;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  readAt,
  count,
  user,
  book,
  review,
}) => (
  <section
    className={clsx(
      className,
      'py-6',
      'px-12',
      'bg-white',
      'grid',
      'grid-cols-2',
      'gap-y-2',
    )}
  >
    <UserProfile className={clsx('col-start-1')} user={user} />
    <DetailsTable className={clsx('col-start-2')} {...{readAt, count, book}} />
    <Review className={clsx('col-start-1', 'col-span-2')} {...{review}} />
  </section>
);
