import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  IconISBN,
  IconLanguage,
  IconPages,
  IconPublishedAt,
  IconPublisher,
} from '~/atoms/Icon/Component';
import {LinkPublishersIndexPage} from '~/atoms/Link';
import {BaseComponent} from './BaseComponent';

export const ISBNDetail: React.FC<{className?: string; isbn: string}> = ({
  isbn,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent {...props} i18n={{key: t('common:isbn')}} Icon={IconISBN}>
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
    <BaseComponent {...props} i18n={{key: t('common:pages')}} Icon={IconPages}>
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
      Icon={IconPublisher}
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
      Icon={IconPublishedAt}
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
    <BaseComponent
      {...props}
      i18n={{key: t('common:language')}}
      Icon={IconLanguage}
    >
      <span>{language}</span>
    </BaseComponent>
  );
};
