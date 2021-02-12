import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent, BaseComponentProps} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  author: {
    name: string;
  };
  books: BaseComponentProps['books'];
};

export const Component: React.FC<ComponentProps> = ({author, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        title: t('{{name}}による本', {name: author.name}),
      }}
    />
  );
};
Component.displayName = 'AllBooksSection';
