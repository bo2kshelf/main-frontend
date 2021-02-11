import {faCogs, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
};

export const SettingsLink: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      link="/settings"
      i18n={{text: t('common:settings')}}
      icon={faCogs}
    />
  );
};

export const LogoutLink: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      link="/api/auth/logout"
      i18n={{text: t('common:logout')}}
      icon={faSignOutAlt}
    />
  );
};
