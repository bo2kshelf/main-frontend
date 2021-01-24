import React from 'react';
import {useTranslation} from 'react-i18next';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  user: {
    displayName: string;
  };
};

export const ReadHeader: React.FC<ContainerProps> = ({user, ...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{title: t('{{name}}が読んだ本', {name: user.displayName})}}
    />
  );
};

export const ReadingHeader: React.FC<ContainerProps> = ({user, ...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{title: t('{{name}}が読んでいる本', {name: user.displayName})}}
    />
  );
};

export const HaveHeader: React.FC<ContainerProps> = ({user, ...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{title: t('{{name}}が持っている本', {name: user.displayName})}}
    />
  );
};
