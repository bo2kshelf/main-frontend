import React from 'react';
import {NextPageLink, PreviousPageLink} from '../link';
import {PageType} from '../transform';
import {Component} from './Component';

export type ContainerProps<P extends PageType> = {
  className?: string;
  skip: number;
  limit: number;
  count: number;
  previousLink?: PreviousPageLink<P>;
  nextLink?: NextPageLink<P>;
};
export const Container: React.FC<ContainerProps<PageType>> = ({
  skip,
  limit,
  count,
  ...props
}) => {
  return (
    <Component
      {...props}
      total={count}
      from={skip + 1}
      to={Math.min(count, skip + limit)}
    />
  );
};
Container.displayName = 'ListSlider';
