import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {
  className?: string;
  book: ComponentProps['details'];
};
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return <Component {...props} details={{...book}} />;
};
Container.displayName = 'Detail';
