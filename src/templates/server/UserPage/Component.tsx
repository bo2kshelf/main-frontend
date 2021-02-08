import clsx from 'clsx';
import React from 'react';
import {ProfileSection, ProfileSectionProps} from './ProfileSection';
import {
  HaveRecordsSection,
  ReadingRecordsSection,
  ReadRecordsSection,
  RecordsSectionProps,
  StackedRecordsSection,
} from './RecordsSection';

export type ComponentProps = {
  className?: string;
  user: ProfileSectionProps['user'] & RecordsSectionProps['user'];
  read: {records: RecordsSectionProps['records']; hasMore: boolean};
  reading: {records: RecordsSectionProps['records']; hasMore: boolean};
  have: {records: RecordsSectionProps['records']; hasMore: boolean};
  stacked: {records: RecordsSectionProps['records']; hasMore: boolean};
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  user,
  read,
  reading,
  stacked,
  have,
}) => (
  <main className={clsx(className)}>
    {children}
    <ProfileSection className={clsx('w-full')} user={user} />
    <ReadingRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={user}
      {...reading}
    />
    <ReadRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={user}
      {...read}
    />
    <HaveRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={user}
      {...have}
    />
    <StackedRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={user}
      {...stacked}
    />
  </main>
);
