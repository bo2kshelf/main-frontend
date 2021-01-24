import {
  faBarcode,
  faBook,
  faBuilding,
  faCalendarAlt,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Component} from './Component';

export const ISBNDetail: React.FC<{
  className?: string;
  detail: string;
}> = ({detail, ...props}) => {
  return (
    <Component
      {...props}
      detail={{key: 'ISBN', value: detail}}
      icon={faBarcode}
    />
  );
};
export type ISBNDetailType = Parameters<typeof ISBNDetail>[0];

export const PagesDetail: React.FC<{
  className?: string;
  detail: number;
}> = ({detail, ...props}) => {
  return (
    <Component
      {...props}
      detail={{key: 'ページ数', value: `${detail}ページ`}}
      icon={faBook}
    />
  );
};
export type PagesDetailType = Parameters<typeof PagesDetail>[0];

export const PublisherDetail: React.FC<{
  className?: string;
  detail: string;
}> = ({detail, ...props}) => {
  return (
    <Component
      {...props}
      detail={{key: '出版社', value: detail}}
      icon={faBuilding}
    />
  );
};
export type PublisherDetailType = Parameters<typeof PublisherDetail>[0];

export const DateDetail: React.FC<{
  className?: string;
  detail: string;
}> = ({detail, ...props}) => {
  return (
    <Component
      {...props}
      detail={{key: '発売日', value: detail}}
      icon={faCalendarAlt}
    />
  );
};
export type DateDetailType = Parameters<typeof DateDetail>[0];

export const LanguageDetail: React.FC<{
  className?: string;
  detail: string;
}> = ({detail, ...props}) => {
  return (
    <Component
      {...props}
      detail={{key: '言語', value: detail}}
      icon={faGlobe}
    />
  );
};
export type LanguageDetailType = Parameters<typeof LanguageDetail>[0];
