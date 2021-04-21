import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkPublishersBooksPage} from '~/components/atoms/Link';
import {BooksSection} from '~/components/organisms/BooksSection';
import {MoreLinkBase} from '~/templates/BookPage/molecules/MoreDetailsLink';

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
      i18n={{title: t('{{name}}から出版された本', {name})}}
      MoreDetailsLink={(props) => (
        <MoreLinkBase
          {...props}
          Link={(props) => <LinkPublishersBooksPage id={id} {...props} />}
        />
      )}
    />
  );
};