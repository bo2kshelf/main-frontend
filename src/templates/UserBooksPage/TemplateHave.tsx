import Head from 'next/head';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Merge} from 'type-fest';
import {BaseComponent} from './BaseComponent';
import {HeaderHaveBooks} from './organisms/Header';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<ContainerProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({...props}) => (
  <BaseComponent
    {...props}
    Header={({...props}) => <HeaderHaveBooks {...props} />}
  />
);

export type ContainerProps = TransformedProps;
export const Container: React.FC<ContainerProps> = (props) => {
  const {t} = useTranslation();
  return (
    <Component {...props}>
      <Head>
        <title>
          {t('head:user_have_books_page', {name: props.displayName})}
        </title>
      </Head>
    </Component>
  );
};
