import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {
  className?: string;
  book: ComponentProps['book'];
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
Container.displayName = 'Header';
