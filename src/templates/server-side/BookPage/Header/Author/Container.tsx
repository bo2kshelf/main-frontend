import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  author: {
    id: string;
    name: string;
    roles: string[] | null;
  };
};
export const Container: React.FC<ContainerProps> = ({author, ...props}) => {
  return (
    <Component
      {...props}
      {...author}
      roles={author.roles?.join(',') || null}
      link={`/authors/${author.id}`}
    />
  );
};
Container.displayName = 'Author';
