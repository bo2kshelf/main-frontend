import Head from 'next/head';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Component} from './Component';
import {HaveBooksHeader} from './Header';
import {PageType, TransformedProps} from './transform';

export type ContainerProps<P extends PageType> = TransformedProps<P>;

export const HaveContainer: React.FC<ContainerProps<'have'>> = (props) => {
  const {t} = useTranslation();
  return (
    <Component {...props} Header={HaveBooksHeader}>
      <Head>
        <title>
          {t('head:user_have_books_page', {name: props.displayName})}
        </title>
      </Head>
    </Component>
  );
};

export const ReadContainer: React.FC<ContainerProps<'read'>> = (props) => {
  const {t} = useTranslation();
  return (
    <Component {...props} Header={HaveBooksHeader}>
      <Head>
        <title>
          {t('head:user_read_books_page', {name: props.displayName})}
        </title>
      </Head>
    </Component>
  );
};

export const ReadingContainer: React.FC<ContainerProps<'reading'>> = (
  props,
) => {
  const {t} = useTranslation();
  return (
    <Component {...props} Header={HaveBooksHeader}>
      <Head>
        <title>
          {t('head:user_reading_books_page', {name: props.displayName})}
        </title>
      </Head>
    </Component>
  );
};

export const WishContainer: React.FC<ContainerProps<'wish'>> = (props) => {
  const {t} = useTranslation();
  return (
    <Component {...props} Header={HaveBooksHeader}>
      <Head>
        <title>
          {t('head:user_wish_books_page', {name: props.displayName})}
        </title>
      </Head>
    </Component>
  );
};

export const StackedContainer: React.FC<ContainerProps<'stacked'>> = (
  props,
) => {
  const {t} = useTranslation();
  return (
    <Component {...props} Header={HaveBooksHeader}>
      <Head>
        <title>
          {t('head:user_stacked_books_page', {name: props.displayName})}
        </title>
      </Head>
    </Component>
  );
};
