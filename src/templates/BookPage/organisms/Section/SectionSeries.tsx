import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkSeriesIndexPage} from '~/components/atoms/Link';
import {BooksSection} from '~/components/organisms/BooksSection';
import {MoreDetailsLink} from '../../../../components/atoms/MoreDetailsLink';

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
      i18n={{title: t('{{title}}のシリーズ', {title})}}
      MoreDetailsLink={(props) => (
        <MoreDetailsLink
          {...props}
          Link={(props) => <LinkSeriesIndexPage id={id} {...props} />}
        />
      )}
    />
  );
};
