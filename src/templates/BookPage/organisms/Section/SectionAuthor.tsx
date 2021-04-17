import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkAuthorsIndexPage} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentAuthorsSectionProps = {
  className?: string;
  id: string;
  name: string;
  books: {id: string; cover?: string; title: string}[];
};
export const ComponentAuthorsSection: React.FC<ComponentAuthorsSectionProps> = ({
  id,
  name,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{title: t('{{name}}による他の本', {name})}}
      Link={(props) => <LinkAuthorsIndexPage id={id} {...props} />}
    />
  );
};
