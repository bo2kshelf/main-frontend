import React from 'react';
import {BaseComponent} from './BaseComponent';
import {
  HaveHeader,
  HeaderProps,
  ReadHeader,
  ReadingHeader,
  StackedHeader,
} from './Header';
import {
  HaveRecordsNoBox,
  ReadingRecordsNoBox,
  ReadRecordsNoBox,
  StackedRecordsNoBox,
} from './NoRecordBox';

export type ComponentProps = {
  className?: string;
  user: HeaderProps['user'];
  books: {id: string; title: string; cover?: string}[];
  hasNext: boolean;
};

export const ReadRecordsSection: React.FC<ComponentProps> = ({...props}) => (
  <BaseComponent {...props} Header={ReadHeader} NoBooksBox={ReadRecordsNoBox} />
);

export const ReadingRecordsSection: React.FC<ComponentProps> = ({...props}) => (
  <BaseComponent
    {...props}
    Header={ReadingHeader}
    NoBooksBox={ReadingRecordsNoBox}
  />
);

export const HaveRecordsSection: React.FC<ComponentProps> = ({...props}) => (
  <BaseComponent {...props} Header={HaveHeader} NoBooksBox={HaveRecordsNoBox} />
);

export const StackedRecordsSection: React.FC<ComponentProps> = ({...props}) => (
  <BaseComponent
    {...props}
    Header={StackedHeader}
    NoBooksBox={StackedRecordsNoBox}
  />
);
