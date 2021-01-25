import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {
  className?: string;
  series: ComponentProps['series'];
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} />;
};
Container.displayName = 'SeriesSection';
