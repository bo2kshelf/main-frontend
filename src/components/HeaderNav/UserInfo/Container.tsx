import clsx from 'clsx';
import React from 'react';
import {useCurrentUser} from '~/auth/useCurrentUser';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {currentUser, isLoading} = useCurrentUser();

  if (!currentUser) return <div className={clsx()} />;
  return (
    <Component {...props} loading={isLoading} data={currentUser.profile} />
  );
};
Container.displayName = 'UserInfo';
