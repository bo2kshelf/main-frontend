import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  book: {
    isbn?: string;
    publishers?: {id: string; name: string}[];
  };
};
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return <Component {...props} {...book} />;
};
Container.displayName = 'Detail';
