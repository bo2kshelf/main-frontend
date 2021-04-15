import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkPublishersIndexPage} from '~/atoms/Link';
import {BaseComponent} from './BaseComponent';

export const PublisherComponent: React.FC<{
  className?: string;
  publisher: {id: string; name: string};
}> = ({publisher, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Link={(props) => <LinkPublishersIndexPage id={publisher.id} {...props} />}
      i18n={{
        title: t('{{name}}から出版されている他の本', {name: publisher.name}),
      }}
    />
  );
};

export const SeriesComponent: React.FC<{
  className?: string;
  series: {id: string; title: string};
}> = ({series, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Link={(props) => <LinkPublishersIndexPage id={series.id} {...props} />}
      i18n={{
        title: t('{{title}}のシリーズ', {title: series.title}),
      }}
    />
  );
};

export const AuthorsComponent: React.FC<{
  className?: string;
  author: {id: string; name: string};
}> = ({author, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Link={(props) => <LinkPublishersIndexPage id={author.id} {...props} />}
      i18n={{
        title: t('{{name}}による他の本', {name: author.name}),
      }}
    />
  );
};
