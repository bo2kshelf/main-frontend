import React from 'react';
import {
  LeftestStacked,
  LeftStacked,
  RightestStacked,
  RightStacked,
} from '../../atoms/SliderButton';
import {BaseComponent} from './BaseComponent';
import {switcher} from './switcher';

export type ComponentProps = {
  className?: string;
  userName: string;
  leftest: boolean;
  left?: number;
  right?: number;
  rightest?: number;
};
export const Component: React.FC<ComponentProps> = ({...props}) => {
  return (
    <BaseComponent
      {...props}
      Leftest={(props) => <LeftestStacked {...props} />}
      Left={(props) => <LeftStacked {...props} />}
      Right={(props) => <RightStacked {...props} />}
      Rightest={(props) => <RightestStacked {...props} />}
    />
  );
};

export type ContainerProps = {
  className?: string;
  userName: string;
  pageNumber: number;
  pagesCount: number;
};
export const Container: React.FC<ContainerProps> = ({
  pageNumber,
  pagesCount,
  ...props
}) => {
  return <Component {...props} {...{...switcher({pageNumber, pagesCount})}} />;
};
