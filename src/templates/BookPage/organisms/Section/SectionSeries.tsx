import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkSeriesIndexPage} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentSeriesSectionProps = {
  className?: string;
  id: string;
  title: string;
  books: {id: string; cover?: string; title: string}[];
};
export const ComponentSeriesSection: React.FC<ComponentSeriesSectionProps> = ({
  id,
  title,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{title: t('{{title}}のシリーズ', {title})}}
      Link={(props) => <LinkSeriesIndexPage id={id} {...props} />}
    />
  );
};
