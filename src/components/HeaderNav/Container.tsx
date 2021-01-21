import {useUser} from '@auth0/nextjs-auth0';
import React from 'react';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {user, isLoading} = useUser();

  return (
    <Component
      {...props}
      userAuthenticated={Boolean(user)}
      userLoading={isLoading}
    />
  );
};
