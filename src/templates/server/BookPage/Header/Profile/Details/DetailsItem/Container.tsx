import {
  faBarcode,
  faBook,
  faBuilding,
  faCalendarAlt,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Component} from './Component';

export const ISBNDetail: React.FC<{
  className?: string;
  detail: string;
}> = ({detail, ...props}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      detailKey={t('common:isbn')}
      detailValue={detail}
      icon={faBarcode}
    />
  );
};

export const PagesDetail: React.FC<{
  className?: string;
  detail: number;
}> = ({detail, ...props}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      detailKey={t('common:pages')}
      detailValue={t('common:page', {page: detail})}
      icon={faBook}
    />
  );
};

export const PublisherDetail: React.FC<{
  className?: string;
  detail: string;
}> = ({detail, ...props}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      detailKey={t('common:publisher')}
      detailValue={detail}
      icon={faBuilding}
    />
  );
};

export const DateDetail: React.FC<{
  className?: string;
  detail: string;
}> = ({detail, ...props}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      detailKey={t('common:publish_date')}
      detailValue={detail}
      icon={faCalendarAlt}
    />
  );
};

export const LanguageDetail: React.FC<{
  className?: string;
  detail: string;
}> = ({detail, ...props}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      detailKey={t('common:language')}
      detailValue={detail}
      icon={faGlobe}
    />
  );
};
