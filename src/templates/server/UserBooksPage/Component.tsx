import clsx from 'clsx';
import React from 'react';
import {BooksSection} from '~/components/common/BooksSection';
import {ProfileSection, ProfileSectionProps} from '../UserPage/ProfileSection';
import {RecordsSectionProps} from '../UserPage/RecordsSection';
import {HeaderProps} from './Header';
import {ListSliderProps} from './Slider';

export type ComponentProps = {
  className?: string;
  user: ProfileSectionProps['user'];
  records: RecordsSectionProps['records'];
  count: number;
  previousLink: ListSliderProps['previousLink'];
  nextLink: ListSliderProps['nextLink'];
  Header: React.FC<HeaderProps>;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  Header,
  user: account,
  records,
  count,
  ...props
}) => (
  <main className={clsx(className)}>
    <ProfileSection className={clsx('w-full')} user={account} />
    <Header
      className={clsx('w-full', 'mt-4', 'mb-4')}
      account={account}
      records={{count}}
    />
    {records.length > 0 && (
      <>
        <BooksSection
          className={clsx('w-full', 'my-8')}
          books={records.map(({book}) => book)}
        />
      </>
    )}
  </main>
);
