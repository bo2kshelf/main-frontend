import React from 'react';
import {Component, ComponentProps} from '../../../BookPage/SeriesSection/List';

export type ContainerProps = {
  className?: string;
  books: ComponentProps['books'];
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
Container.displayName = 'List';
