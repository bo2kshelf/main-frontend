import React from 'react';
import {useTranslation} from 'react-i18next';
import {IconPublisher} from '~/components/atoms/Icon/Component';
import {LinkPublishersIndexPage} from '~/components/atoms/Link';
import {ComponentBase} from './ComponentBase';

export type ComponentProps = {
  className?: string;
  publishers: {
    id: string;
    name: string;
  }[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  publishers,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <ComponentBase
      {...props}
      Icon={IconPublisher}
      i18n={{key: t('common:publisher')}}
    >
      {publishers.map(({name, id}) => (
        <LinkPublishersIndexPage key={id} id={id}>
          {name}
        </LinkPublishersIndexPage>
      ))}
    </ComponentBase>
  );
};
