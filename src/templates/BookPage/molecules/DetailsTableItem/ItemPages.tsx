import React from 'react';
import {useTranslation} from 'react-i18next';
import {IconPages} from '~/components/atoms/Icon/Component';
import {ComponentBase} from './ComponentBase';

export type ComponentPagesProps = {
  className?: string;
  pages: number;
};
export const ComponentPages: React.FC<ComponentPagesProps> = ({
  className,
  pages,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <ComponentBase {...props} Icon={IconPages} i18n={{key: t('common:pages')}}>
      {pages}
    </ComponentBase>
  );
};
