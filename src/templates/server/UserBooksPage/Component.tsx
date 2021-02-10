import clsx from 'clsx';
import React from 'react';
import {ProfileSection, ProfileSectionProps} from '../UserPage/ProfileSection';
import {RecordsSectionProps} from '../UserPage/RecordsSection';
import {HaveBooksHeader} from './Header';
import {ListSection} from './Section';
import {ListSlider, ListSliderProps} from './Slider';

export type ComponentProps = {
  className?: string;
  account: ProfileSectionProps['user'];
  records: RecordsSectionProps['records'];
  skip: number;
  limit: number;
  count: number;
  previousLink: ListSliderProps['previousLink'];
  nextLink: ListSliderProps['nextLink'];
  Header: typeof HaveBooksHeader;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  Header,
  account,
  records,
  count,
  ...props
}) => (
  <main className={clsx(className)}>
    <ProfileSection className={clsx('w-full')} user={account} />
    <Header
      className={clsx('w-full', 'mt-4')}
      account={account}
      records={{count}}
    />
    <ListSlider className={clsx('w-full')} {...props} count={count} />
    <ListSection records={records} />
    <ListSlider className={clsx('w-full')} {...props} count={count} />
  </main>
);
