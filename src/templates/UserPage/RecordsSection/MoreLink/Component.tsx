import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkUsersRecordsPage} from '~/components/atoms/Link';

export type ComponentProps = {
  className?: string;
  userName: string;
};
export const Component: React.FC<ComponentProps> = ({className, userName}) => {
  const {t} = useTranslation();
  return (
    <LinkUsersRecordsPage
      username={userName}
      className={clsx(
        className,
        'block',
        'group',
        'py-4',
        'text-center',
        'bg-blue-400',
        'hover:bg-blue-500',
      )}
    >
      <span className={clsx('text-white')}>{t('もっと見る')}</span>
    </LinkUsersRecordsPage>
  );
};
