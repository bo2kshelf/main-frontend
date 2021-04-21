import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkPublishersBooksPage} from '~/components/atoms/Link';
import {MoreLinkBase} from '~/templates/BookPage/molecules/MoreDetailsLink';
import {BaseComponent} from '~/templates/BookPage/organisms/Section';

export type ComponentProps = {
  className?: string;
  id: string;
  name: string;
  books: {id: string; cover?: string; title: string}[];
};

export const Component: React.FC<ComponentProps> = ({id, name, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
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
