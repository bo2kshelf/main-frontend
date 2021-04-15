import {
  faBarcode,
  faBook,
  faBuilding,
  faCalendarAlt,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkPublishersIndexPage} from '~/atoms/Link';
import {BaseComponent} from './BaseComponent';

export const ISBNDetail: React.FC<{className?: string; isbn: string}> = ({
  isbn,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent {...props} i18n={{key: t('common:isbn')}} icon={faBarcode}>
      <span>{isbn}</span>
    </BaseComponent>
  );
};

export const PagesDetail: React.FC<{
  className?: string;
  pages: number;
}> = ({pages, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent {...props} i18n={{key: t('common:pages')}} icon={faBook}>
      <span>{pages}</span>
    </BaseComponent>
  );
};

export const PublisherDetail: React.FC<{
  className?: string;
  publishers: {id: string; name: string}[];
}> = ({publishers, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        key: t('common:publisher'),
      }}
      icon={faBuilding}
    >
      {publishers.map(({name, id}) => (
        <LinkPublishersIndexPage key={id} id={id}>
          <a>{name}</a>
        </LinkPublishersIndexPage>
      ))}
    </BaseComponent>
  );
};

export const DateDetail: React.FC<{
  className?: string;
  publishDate: string;
}> = ({publishDate: detail, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{key: t('common:publish_date')}}
      icon={faCalendarAlt}
    >
      <span>{detail}</span>
    </BaseComponent>
  );
};

export const LanguageDetail: React.FC<{
  className?: string;
  language: string;
}> = ({language, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent {...props} i18n={{key: t('common:language')}} icon={faGlobe}>
      <span>{language}</span>
    </BaseComponent>
  );
};
