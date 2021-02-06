import React from 'react';
import {Component} from './Component';
import {
  DateDetail,
  ISBNDetail,
  LanguageDetail,
  PagesDetail,
  PublisherDetail,
} from './DetailsItem';

const map = {
  isbn: ISBNDetail,
  pages: PagesDetail,
  date: DateDetail,
  publisher: PublisherDetail,
  language: LanguageDetail,
};

export type ContainerProps = {
  className?: string;
  book: {
    [key in keyof typeof map]: Parameters<typeof map[key]>[0]['detail'] | null;
  };
};
export const Container: React.FC<ContainerProps> = ({
  book: {date, isbn, language, pages, publisher},
  ...props
}) => {
  return (
    <Component {...props}>
      {isbn && map.isbn({detail: isbn})}
      {pages && map.pages({detail: pages})}
      {date && map.date({detail: date})}
      {publisher && map.publisher({detail: publisher})}
      {language && map.language({detail: language})}
    </Component>
  );
};
Container.displayName = 'Detail';
