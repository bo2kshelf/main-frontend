import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {useCurrentUser} from '~/auth/useCurrentUser';
import {UserInfo} from '../UserInfo';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {currentUser, isLoading} = useCurrentUser();

  if (isLoading) {
    return (
      <div className={clsx()}>
        <p>Loading</p>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className={clsx()}>
        <NextLink href="/login">
          <a>login</a>
        </NextLink>
      </div>
    );
  }

  if (!currentUser.profile) {
    return (
      <div className={clsx()}>
        <NextLink href="/signup">
          <a>signup</a>
        </NextLink>
      </div>
    );
  }

  return <UserInfo currentUser={currentUser.profile} />;
};
Container.displayName = 'User';
