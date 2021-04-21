import React from 'react';
import {useTranslation} from 'react-i18next';
import {BooksSection} from '~/components/organisms/BooksSection';
import {MoreDetailsLinkPublishers} from '../../molecules/MoreDetailsLink';

export type ComponentProps = {
  className?: string;
  id: string;
  name: string;
  books: {id: string; cover?: string; title: string}[];
};
export const Component: React.FC<ComponentProps> = ({id, name, ...props}) => {
  const {t} = useTranslation();
  return (
    <BooksSection
      {...props}
      i18n={{title: t('{{name}}から出版されている他の本', {name})}}
      MoreDetailsLink={(props) => (
        <MoreDetailsLinkPublishers id={id} {...props} />
      )}
    />
  );
};
