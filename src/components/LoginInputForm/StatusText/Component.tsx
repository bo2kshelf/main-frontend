import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Merge} from 'type-fest';

export type BaseComponentProps = Merge<
  ComponentProps,
  {
    i18n: Record<
      'clientError' | 'wrongPassword' | 'noUser' | 'serverError',
      string
    >;
  }
>;
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  status,
  i18n,
}) => (
  <p className={clsx(className, 'text-center', 'text-red-600', 'text-sm')}>
    {status === 400 && i18n.clientError}
    {status === 401 && i18n.wrongPassword}
    {status === 404 && i18n.noUser}
    {status === 500 && i18n.serverError}
  </p>
);

export type ComponentProps = {
  className?: string;

  status?: 400 | 401 | 404 | 500;
};
export const Component: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();

  return (
    <BaseComponent
      {...props}
      i18n={{
        clientError: t('クライアント側で何らかのエラーが発生しています'),
        wrongPassword: t('パスワードが間違っています'),
        noUser: t('存在しないユーザーです'),
        serverError: t('サーバー側で何らかのエラーが発生しています'),
      }}
    />
  );
};
