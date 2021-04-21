import React from 'react';
import {useTranslation} from 'react-i18next';
import {Date} from '~/components/atoms/Date';
import {IconPublishedAt} from '~/components/atoms/Icon/Component';
import {ComponentBase} from './ComponentBase';

export type ComponentProps = {
  className?: string;
  publishedAt: string;
};

export const Component: React.FC<ComponentProps> = ({
  className,
  publishedAt,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <ComponentBase
      {...props}
      Icon={IconPublishedAt}
      i18n={{key: t('common:publish_date')}}
    >
      <Date date={publishedAt} />
    </ComponentBase>
  );
};
