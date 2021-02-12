import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  author: {
    id: string;
    name: string;
    roles?: string[];
  };
};
export const Container: React.FC<ContainerProps> = ({author, ...props}) => {
  return (
    <Component
      {...props}
      {...author}
      roles={author.roles?.join(',')}
      link={{pathname: `/authors/[id]`, query: {id: author.id}}}
    />
  );
};
Container.displayName = 'Author';
