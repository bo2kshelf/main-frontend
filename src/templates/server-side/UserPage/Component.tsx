import clsx from 'clsx';
import React from 'react';
import {ProfileSection, ProfileSectionProps} from './ProfileSection';

export type ComponentProps = {
  className?: string;
  user: ProfileSectionProps['user'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  user,
}) => (
  <main className={clsx(className)}>
    {children}
    <ProfileSection className={clsx('w-full')} user={user} />
  </main>
);
