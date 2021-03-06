import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  book: {
    id: string;
    title: string;
    subtitle?: string;
    cover?: string;
  };
};
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return <Component {...props} {...book} />;
};
Container.displayName = 'BookLink';
