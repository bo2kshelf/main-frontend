import Head from 'next/head';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkMeIndexPage} from '~/components/atoms/Link';

export type ContainerProps = Record<string, unknown>;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {t} = useTranslation();

  return (
    <main>
      <Head>
        <title>{t('head:index_page')}</title>
      </Head>
      <LinkMeIndexPage>/me</LinkMeIndexPage>
    </main>
  );
};
