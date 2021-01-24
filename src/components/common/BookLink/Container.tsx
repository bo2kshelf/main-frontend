import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = {
  className?: string;
  book: {
    id: string;
    title: ComponentProps['title'];
    cover: ComponentProps['cover'];
  };
};
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return <Component {...props} {...book} link={`/books/${book.id}`} />;
};
Container.displayName = 'BookLink';
