import React from 'react';
import {
  LeftestHave,
  LeftHave,
  RightestHave,
  RightHave,
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
      Leftest={(props) => <LeftestHave {...props} />}
      Left={(props) => <LeftHave {...props} />}
      Right={(props) => <RightHave {...props} />}
      Rightest={(props) => <RightestHave {...props} />}
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
