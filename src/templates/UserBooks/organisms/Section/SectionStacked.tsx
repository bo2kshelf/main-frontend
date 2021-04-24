import React from 'react';
import {HeaderStackedBooks} from '../../molecules/Header';
import {SliderStackedBooks} from '../../molecules/Slider';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  displayName: string;
  userName: string;
  books: {id: string; title: string; cover?: string}[];
  booksCount: number;
  pageNumber: number;
  pagesCount: number;
};
export const Component: React.FC<ComponentProps> = ({...props}) => (
  <BaseComponent
    {...props}
    Header={({...props}) => <HeaderStackedBooks {...props} />}
    Slider={({...props}) => <SliderStackedBooks {...props} />}
  />
);
