import React from 'react';
import {useTranslation} from 'react-i18next';
import {MoreDetailsLinkSeries} from '../../molecules/MoreDetailsLink';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  id: string;
  title: string;
  books: {id: string; cover?: string; title: string}[];
};
export const Component: React.FC<ComponentProps> = ({id, title, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{title: t('{{title}}のシリーズ', {title})}}
      MoreDetailsLink={(props) => <MoreDetailsLinkSeries id={id} {...props} />}
    />
  );
};
