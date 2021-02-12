import clsx from 'clsx';
import React from 'react';
import {Head, HeadProps} from './Head';
import {List, ListProps} from './List';

export type ComponentProps = {
  className?: string;
  series: HeadProps['series'] & ListProps['series'];
};
export const Component: React.FC<ComponentProps> = ({className, series}) => (
  <div className={clsx(className)}>
    <Head
      className={clsx('w-full', 'max-w-screen-xl', 'mx-auto', 'mb-4')}
      series={series}
    />
    <List className={clsx('w-full')} series={series} />
  </div>
);
Component.displayName = 'SeriesSection';
