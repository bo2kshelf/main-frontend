import clsx from 'clsx';
import React from 'react';
import {ProfileSection, ProfileSectionProps} from '../UserPage/ProfileSection';
import {RecordsSectionProps} from '../UserPage/RecordsSection';
import {ListSection} from './Section';
import {ListSlider, ListSliderProps} from './Slider';

export type ComponentProps = {
  className?: string;
  user: ProfileSectionProps['user'];
  records: RecordsSectionProps['records'];
  skip: number;
  limit: number;
  count: number;
  previousLink: ListSliderProps['previousLink'];
  nextLink: ListSliderProps['nextLink'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  user,
  records,
  previousLink,
  nextLink,
  skip,
  limit,
  count,
}) => (
  <main className={clsx(className)}>
    {children}
    <ProfileSection className={clsx('w-full')} user={user} />
    <ListSlider
      className={clsx('w-full')}
      skip={skip}
      limit={limit}
      count={count}
      previousLink={previousLink}
      nextLink={nextLink}
    />
    <ListSection records={records} />
    <ListSlider
      className={clsx('w-full')}
      skip={skip}
      limit={limit}
      count={count}
      previousLink={previousLink}
      nextLink={nextLink}
    />
  </main>
);
