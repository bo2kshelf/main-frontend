import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  series: {
    id: string;
    title: string;
  };
};
export const Container: React.FC<ContainerProps> = ({series, ...props}) => {
  return <Component {...props} {...series} link={`/series/${series.id}`} />;
};
Container.displayName = 'Head';
