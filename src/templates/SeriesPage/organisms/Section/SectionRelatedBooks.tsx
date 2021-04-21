import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkSeriesBooksPage} from '~/components/atoms/Link';
import {MoreDetailsLink} from '~/components/atoms/MoreDetailsLink';
import {BooksSection} from '~/components/organisms/BooksSection';

export type ComponentProps = {
  className?: string;
  id: string;
  title: string;
  books: {id: string; cover?: string; title: string}[];
};

export const Component: React.FC<ComponentProps> = ({id, title, ...props}) => {
  const {t} = useTranslation();
  return (
    <BooksSection
      {...props}
      i18n={{title: t('{{title}}に関連する本', {title})}}
      MoreDetailsLink={(props) => (
        <MoreDetailsLink
          {...props}
          Link={(props) => <LinkSeriesBooksPage id={id} {...props} />}
        />
      )}
    />
  );
};
