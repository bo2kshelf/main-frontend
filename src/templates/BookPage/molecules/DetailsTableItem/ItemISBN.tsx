import React from 'react';
import {useTranslation} from 'react-i18next';
import {IconISBN} from '~/components/atoms/Icon/Component';
import {ComponentBase} from './ComponentBase';

export type ComponentISBNProps = {
  className?: string;
  isbn: string;
};
export const ComponentISBN: React.FC<ComponentISBNProps> = ({
  className,
  isbn,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <ComponentBase {...props} Icon={IconISBN} i18n={{key: t('common:isbn')}}>
      {isbn}
    </ComponentBase>
  );
};
