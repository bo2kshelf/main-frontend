import {
  faGithub,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  url: string;
};

export const GitHubLoginButton: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      icon={faGithub}
      provider={t('{{provider}}でログイン', {provider: 'GitHub'})}
      className={clsx(className, 'bg-github-1')}
    />
  );
};

export const TwitterLoginButton: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <Component
      {...props}
      icon={faTwitter}
      provider={t('{{provider}}でログイン', {provider: 'Twitter'})}
      className={clsx(className, 'bg-twitter-1')}
    />
  );
};

export const GoogleLoginButton: React.FC<ContainerProps> = ({
  className,
  ...props
}) => {
  const {t} = useTranslation();

  return (
    <Component
      {...props}
      icon={faGoogle}
      provider={t('{{provider}}でログイン', {provider: 'Google'})}
      className={clsx(className, 'bg-google-1')}
    />
  );
};
