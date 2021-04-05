import React from 'react';
import {Component} from './Component';
import {HaveBooksHeader} from './Header';
import {PageType, TransformedProps} from './transform';

export type ContainerProps<P extends PageType> = TransformedProps<P>;

export const HaveContainer: React.FC<ContainerProps<'have'>> = ({...props}) => {
  return <Component {...props} Header={HaveBooksHeader} />;
};

export const ReadContainer: React.FC<ContainerProps<'read'>> = ({...props}) => {
  return <Component {...props} Header={HaveBooksHeader} />;
};

export const ReadingContainer: React.FC<ContainerProps<'reading'>> = ({
  ...props
}) => {
  return <Component {...props} Header={HaveBooksHeader} />;
};

export const WishContainer: React.FC<ContainerProps<'wish'>> = ({...props}) => {
  return <Component {...props} Header={HaveBooksHeader} />;
};

export const StackedContainer: React.FC<ContainerProps<'stacked'>> = ({
  ...props
}) => {
  return <Component {...props} Header={HaveBooksHeader} />;
};
