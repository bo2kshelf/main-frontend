import React from 'react';
import {useCurrentUser} from '~/auth/useCurrentUser';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {currentUser, isLoading, isAuthenticated} = useCurrentUser();

  return (
    <Component
      {...props}
      userAuthenticated={isAuthenticated}
      userLoading={isLoading}
      currentUser={currentUser}
    />
  );
};
Container.displayName = 'HeaderNav';
