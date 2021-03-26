import clsx from 'clsx';
import React from 'react';
import {useCurrentUser} from '~/lib/useCurrentUser';
import {Login} from '../Login';
import {UserInfo} from '../UserInfo';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {currentUser, isLoading} = useCurrentUser();

  if (currentUser) return <UserInfo currentUser={currentUser} />;

  if (isLoading) return <span>Loading</span>;

  return (
    <div className={clsx()}>
      <Login />
    </div>
  );
};
Container.displayName = 'User';
