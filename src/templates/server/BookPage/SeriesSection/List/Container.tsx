import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {
  className?: string;
  series: {
    books: ComponentProps['books'];
  };
};
export const Container: React.FC<ContainerProps> = ({series, ...props}) => {
  return <Component {...props} {...series} />;
};
Container.displayName = 'List';
