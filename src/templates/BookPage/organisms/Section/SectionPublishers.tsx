import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkPublishersIndexPage} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentPublishersSectionProps = {
  className?: string;
  id: string;
  name: string;
  books: {id: string; cover?: string; title: string}[];
};
export const ComponentPublishersSection: React.FC<ComponentPublishersSectionProps> = ({
  id,
  name,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{title: t('{{name}}から出版されている他の本', {name})}}
      Link={(props) => <LinkPublishersIndexPage id={id} {...props} />}
    />
  );
};
