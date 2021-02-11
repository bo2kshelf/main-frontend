import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent, BaseComponentProps} from './BaseComponent';

export type ComponentProps = Omit<BaseComponentProps, 'i18n'>;
export const Component: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        relatedAuthors: t('common:related_authors'),
      }}
    />
  );
};
