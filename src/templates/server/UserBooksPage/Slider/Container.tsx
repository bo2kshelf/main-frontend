import React from 'react';
import {NextPageLink, PreviousPageLink} from '../link';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  skip: number;
  limit: number;
  count: number;
  previousLink?: PreviousPageLink;
  nextLink?: NextPageLink;
};
export const Container: React.FC<ContainerProps> = ({
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
