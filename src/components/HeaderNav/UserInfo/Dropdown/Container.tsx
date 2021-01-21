import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  data: {
    picture: string;
    userName: string;
    displayName: string;
  };
};
export const Container: React.FC<ContainerProps> = ({data, ...props}) => {
  return <Component {...props} {...data} />;
};
