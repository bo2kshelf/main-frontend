import React from 'react';
import {useTranslation} from 'react-i18next';
import {linkFactories} from '~/lib/Links';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  hasMore: boolean;
  user: {
    userName: string;
    displayName: string;
  };
};

export const ReadHeader: React.FC<ContainerProps> = ({user, ...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{
        title: t('{{name}}が読んだ本', {name: user.displayName}),
        more: t('もっと見る'),
      }}
      link={linkFactories['/users/[username]/read']({username: user.userName})}
    />
  );
};

export const ReadingHeader: React.FC<ContainerProps> = ({user, ...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{
        title: t('{{name}}が読んでいる本', {name: user.displayName}),
        more: t('もっと見る'),
      }}
      link={linkFactories['/users/[username]/reading']({
        username: user.userName,
      })}
    />
  );
};

export const HaveHeader: React.FC<ContainerProps> = ({user, ...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{
        title: t('{{name}}が持っている本', {name: user.displayName}),
        more: t('もっと見る'),
      }}
      link={linkFactories['/users/[username]/have']({username: user.userName})}
    />
  );
};

export const StackedHeader: React.FC<ContainerProps> = ({user, ...props}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      i18n={{
        title: t('{{name}}が積んでいる本', {name: user.displayName}),
        more: t('もっと見る'),
      }}
      link={linkFactories['/users/[username]/stacked']({
        username: user.userName,
      })}
    />
  );
};
