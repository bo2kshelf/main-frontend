import React from 'react';
import {BaseComponent} from './BaseComponent';
import {
  HaveHeader,
  HeaderProps,
  ReadHeader,
  ReadingHeader,
  StackedHeader,
} from './Header';

export type ComponentProps = {
  className?: string;
  user: HeaderProps['user'];
  records: {
    book: {id: string; title: string; cover: string | null};
  }[];
  hasNext: boolean;
};

export const ReadRecordsSection: React.FC<ComponentProps> = ({...props}) => {
  return <BaseComponent {...props} Header={ReadHeader} />;
};

export const ReadingRecordsSection: React.FC<ComponentProps> = ({...props}) => {
  return <BaseComponent {...props} Header={ReadingHeader} />;
};

export const HaveRecordsSection: React.FC<ComponentProps> = ({...props}) => {
  return <BaseComponent {...props} Header={HaveHeader} />;
};

export const StackedRecordsSection: React.FC<ComponentProps> = ({...props}) => {
  return <BaseComponent {...props} Header={StackedHeader} />;
};
