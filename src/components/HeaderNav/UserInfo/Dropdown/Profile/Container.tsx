import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  account: {
    picture: string;
    userName: string;
    displayName: string;
  };
};
export const Container: React.FC<ContainerProps> = ({account, ...props}) => {
  return <Component {...props} {...account} link={{pathname: '/me'}} />;
};
Container.displayName = 'Profile';
