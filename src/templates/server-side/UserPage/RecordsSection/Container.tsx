import React from 'react';
import {Component, ComponentProps} from './Component';
import {HaveHeader, HeaderProps, ReadHeader, ReadingHeader} from './Header';

export type ContainerProps = {
  className?: string;
  user: HeaderProps['user'];
  records: ComponentProps['records'];
};

export const ReadRecordsSection: React.FC<ContainerProps> = ({
  user,
  ...props
}) => {
  return (
    <Component {...props}>
      <ReadHeader user={user} />
    </Component>
  );
};

export const ReadingRecordsSection: React.FC<ContainerProps> = ({
  user,
  ...props
}) => {
  return (
    <Component {...props}>
      <ReadingHeader user={user} />
    </Component>
  );
};

export const HaveRecordsSection: React.FC<ContainerProps> = ({
  user,
  ...props
}) => {
  return (
    <Component {...props}>
      <HaveHeader user={user} />
    </Component>
  );
};
