import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkSeriesBooksPage} from '~/components/atoms/Link';
import {MoreLinkBase} from '~/templates/BookPage/molecules/MoreDetailsLink';
import {BaseComponent} from '~/templates/BookPage/organisms/Section';

export type ComponentProps = {
  className?: string;
  id: string;
  title: string;
  books: {id: string; cover?: string; title: string}[];
};

export const Component: React.FC<ComponentProps> = ({id, title, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{title: t('{{title}}の本', {title})}}
      MoreDetailsLink={(props) => (
        <MoreLinkBase
          {...props}
          Link={(props) => <LinkSeriesBooksPage id={id} {...props} />}
        />
      )}
    />
  );
};
