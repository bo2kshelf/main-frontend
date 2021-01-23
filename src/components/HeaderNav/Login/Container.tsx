import React from 'react';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
Container.displayName = 'Login';
