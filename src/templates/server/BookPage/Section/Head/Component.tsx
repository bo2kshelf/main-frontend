import {LinkProps} from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent} from './BaseComponent';

export const PublisherComponent: React.FC<{
  className?: string;
  link: LinkProps['href'];
  publisher: {
    id: string;
    name: string;
  };
}> = ({publisher, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        title: t('{{name}}から出版されている他の本', {name: publisher.name}),
      }}
    />
  );
};

export const SeriesComponent: React.FC<{
  className?: string;
  link: LinkProps['href'];
  series: {
    id: string;
    title: string;
  };
}> = ({series, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        title: t('{{title}}の他の本', {title: series.title}),
      }}
    />
  );
};
