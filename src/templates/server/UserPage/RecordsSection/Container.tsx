import React from 'react';
import {Component, ComponentProps} from './Component';
import {
  HaveHeader,
  HeaderProps,
  ReadHeader,
  ReadingHeader,
  StackedHeader,
} from './Header';

export type ContainerProps = {
  className?: string;
  user: HeaderProps['user'];
  records: ComponentProps['records'];
  hasMore: boolean;
};

export const ReadRecordsSection: React.FC<ContainerProps> = ({
  user,
  hasMore,
  ...props
}) => {
  return (
    <Component {...props}>
      <ReadHeader user={user} hasMore={hasMore} />
    </Component>
  );
};

export const ReadingRecordsSection: React.FC<ContainerProps> = ({
  user,
  hasMore,
  ...props
}) => {
  return (
    <Component {...props}>
      <ReadingHeader user={user} hasMore={hasMore} />
    </Component>
  );
};

export const HaveRecordsSection: React.FC<ContainerProps> = ({
  user,
  hasMore,
  ...props
}) => {
  return (
    <Component {...props}>
      <HaveHeader user={user} hasMore={hasMore} />
    </Component>
  );
};

export const StackedRecordsSection: React.FC<ContainerProps> = ({
  user,
  hasMore,
  ...props
}) => {
  return (
    <Component {...props}>
      <StackedHeader user={user} hasMore={hasMore} />
    </Component>
  );
};
