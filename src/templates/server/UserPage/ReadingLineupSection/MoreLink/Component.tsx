import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkUsersReadingPage} from '~/atoms/Link';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'text', string>;
  userName: string;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  userName,
}) => (
  <LinkUsersReadingPage
    className={clsx(
      className,
      'py-1',
      'px-3',
      'text-sm',
      'rounded-lg',
      'text-white',
      'bg-blue-400',
      'hover:bg-blue-500',
      'whitespace-nowrap',
    )}
    username={userName}
  >
    {i18n.text}
  </LinkUsersReadingPage>
);

export type ComponentProps = {
  className?: string;
  userName: string;
};
export const Component: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return <BaseComponent {...props} i18n={{text: t('もっと見る')}} />;
};
