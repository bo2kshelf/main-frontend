import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent, BaseComponentProps} from './BaseComponent';

export type ComponentProps = Omit<BaseComponentProps, 'i18n'> & {
  skip: number;
  limit: number;
  count: number;
};
export const Component: React.FC<ComponentProps> = ({
  skip,
  limit,
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        message: t('{{total}}件中{{from}}件から{{to}}件までを表示中', {
          total: count,
          from: skip + 1,
          to: Math.min(count, skip + limit),
        }),
      }}
    />
  );
};
