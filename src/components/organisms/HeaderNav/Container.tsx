import React from 'react';
import {useAuth} from '~/hooks/useAuth';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {signedIn} = useAuth();
  return <Component {...props} signedIn={signedIn} />;
};
Container.displayName = 'HeaderNav';
