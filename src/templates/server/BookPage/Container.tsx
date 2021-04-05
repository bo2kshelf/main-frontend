import React from 'react';
import {Component} from './Component';
import {TransformedProps} from './transform';

export type ContainerProps = TransformedProps;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
Container.displayName = 'BookPage';
