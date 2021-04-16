import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ComponentProps = {
  className?: string;
  status?: 400 | 401 | 404 | 500;
};
export const Component: React.VFC<ComponentProps> = ({className, status}) => {
  const {t} = useTranslation();

  return (
    <p className={clsx(className, 'text-red-600', 'text-sm')}>
      {status === 400 && t('クライアント側で何らかのエラーが発生しています')}
      {status === 401 && t('パスワードが間違っています')}
      {status === 404 && t('存在しないユーザーです')}
      {status === 500 && t('サーバー側で何らかのエラーが発生しています')}
    </p>
  );
};
