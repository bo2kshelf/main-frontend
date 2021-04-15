import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent, BaseComponentProps} from './BaseComponent';

export type ComponentProps = Omit<BaseComponentProps, 'type' | 'i18n' | 'icon'>;

export const PreviousButtonComponent: React.FC<ComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  const i18n = {
    text: t('common:previous'),
  };
  return (
    <BaseComponent {...props} type="Previous" i18n={i18n} icon={faArrowLeft} />
  );
};

export const NextButtonComponent: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  const i18n = {
    text: t('common:next'),
  };
  return (
    <BaseComponent {...props} type="Next" i18n={i18n} icon={faArrowRight} />
  );
};
