import React from 'react';
import {useCurrentUser} from '~/lib/useCurrentUser';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {currentUser, isLoading} = useCurrentUser();

  if (isLoading) return <Component {...props} userLoading={isLoading} />;

  return currentUser ? (
    <Component
      {...props}
      userLoading={false}
      userLoggedIn
      currentUser={currentUser}
    />
  ) : (
    <Component {...props} userLoading={false} userLoggedIn={false} />
  );
};
Container.displayName = 'HeaderNav';
