import Head from 'next/head';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Component} from './Component';
import {TransformedProps} from './transform';

export type ContainerProps = TransformedProps;
export const Container: React.FC<ContainerProps> = (props) => {
  const {t} = useTranslation();

  return (
    <Component {...props}>
      <Head>
        <title>{t('head:user_records_page', {name: props.displayName})}</title>
      </Head>
    </Component>
  );
};
Container.displayName = 'UserRecordPage';
