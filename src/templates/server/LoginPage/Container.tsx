import clsx from 'clsx';
import Head from 'next/head';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LoginInputForm} from '~/components/LoginInputForm';

export type ContainerProps = Record<string, never>;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <main className={clsx('flex', 'justify-center', 'items-center')}>
      <Head>
        <title>{t('head:login_page')}</title>
      </Head>
      <div className={clsx('w-full', 'max-w-md', 'grid')}>
        <LoginInputForm />
      </div>
    </main>
  );
};
Container.displayName = 'LoginPage';
