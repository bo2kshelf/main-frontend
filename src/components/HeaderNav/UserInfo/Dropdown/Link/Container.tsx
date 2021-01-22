import {
  faBookmark,
  faBookReader,
  faCogs,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Component} from './Component';

export const ReadBooksLink: React.FC<{
  className?: string;
}> = ({className}) => {
  const {t} = useTranslation();
  return (
    <Component
      className={clsx(className)}
      link="/books/read"
      text={t('common:read_books')}
      icon={faBookmark}
    />
  );
};

export const ReadingBooksLink: React.FC<{
  className?: string;
}> = ({className}) => {
  const {t} = useTranslation();
  return (
    <Component
      className={clsx(className)}
      link="/books/reading"
      text={t('common:reading_books')}
      icon={faBookReader}
    />
  );
};

export const SettingsLink: React.FC<{
  className?: string;
}> = ({className}) => {
  const {t} = useTranslation();
  return (
    <Component
      className={clsx(className)}
      link="/settings"
      text={t('common:settings')}
      icon={faCogs}
    />
  );
};

export const LogoutLink: React.FC<{
  className?: string;
}> = ({className}) => {
  const {t} = useTranslation();
  return (
    <Component
      className={clsx(className)}
      link="/api/auth/logout"
      text={t('common:logout')}
      icon={faSignOutAlt}
    />
  );
};
