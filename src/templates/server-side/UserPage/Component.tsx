import clsx from 'clsx';
import React from 'react';
import {ProfileSection, ProfileSectionProps} from './ProfileSection';
import {
  HaveRecordsSection,
  ReadingRecordsSection,
  ReadRecordsSection,
  RecordsSectionProps,
} from './RecordsSection';

export type ComponentProps = {
  className?: string;
  user: ProfileSectionProps['user'] & RecordsSectionProps['user'];
  read: RecordsSectionProps['records'];
  reading: RecordsSectionProps['records'];
  have: RecordsSectionProps['records'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  user,
  read,
  reading,
  have,
}) => (
  <main className={clsx(className)}>
    {children}
    <ProfileSection className={clsx('w-full')} user={user} />
    <ReadingRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={user}
      records={reading}
    />
    <ReadRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={user}
      records={read}
    />
    <HaveRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={user}
      records={have}
    />
  </main>
);
