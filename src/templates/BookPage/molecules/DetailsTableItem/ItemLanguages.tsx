import React from 'react';
import {useTranslation} from 'react-i18next';
import {IconLanguage} from '~/components/atoms/Icon/Component';
import {ComponentBase} from './ComponentBase';

export type ComponentProps = {
  className?: string;
  languages: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  languages,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <ComponentBase
      {...props}
      Icon={IconLanguage}
      i18n={{key: t('common:language')}}
    >
      {languages}
    </ComponentBase>
  );
};
