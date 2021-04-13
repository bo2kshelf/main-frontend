import clsx from 'clsx';
import React from 'react';
import {PageLayout} from '~/components/layout/PageLayout';

export const TemplateDecolator: React.FC = ({children}) => (
  <>
    <nav className={clsx('sticky', 'z-50', 'top-0', 'h-24', 'bg-gray-700')} />
    <PageLayout className={clsx('container', 'mx-auto')}>{children}</PageLayout>
  </>
);
