import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ContainerProps = Record<string, unknown>;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {t} = useTranslation();

  return (
    <main>
      <Head>
        <title>{t('head:index_page')}</title>
      </Head>
      <NextLink href="/me">
        <a>/me</a>
      </NextLink>
    </main>
  );
};
