import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  BaseComponent,
  BaseComponentProps,
} from '../../AuthorPage/AllBooksSection';

export type ComponentProps = {
  className?: string;
  publisher: {
    name: string;
  };
  books: BaseComponentProps['books'];
};

export const Component: React.FC<ComponentProps> = ({publisher, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{title: t('{{name}}による本', {name: publisher.name})}}
    />
  );
};
Component.displayName = 'AllBooksSection';
