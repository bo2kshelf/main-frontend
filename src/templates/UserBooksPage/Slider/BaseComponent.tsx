import clsx from 'clsx';
import React from 'react';
import {NextPageLink, PreviousPageLink} from '../link';
import {PageType} from '../transform';
import {NextButton, PreviousButton} from './SliderButton';

export type BaseComponentProps<P extends PageType> = {
  className?: string;
  i18n: Record<'message', string>;
  previousLink?: PreviousPageLink<P>;
  nextLink?: NextPageLink<P>;
};

export const BaseComponent: React.FC<BaseComponentProps<PageType>> = ({
  className,
  previousLink,
  nextLink,
  i18n,
}) => (
  <div className={clsx(className, 'flex')}>
    <div className={clsx('grid', 'mx-auto', 'grid-cols-4', 'gap-x-2')}>
      {previousLink && (
        <PreviousButton
          className={clsx('w-32', 'col-start-1', 'col-span-1')}
          link={previousLink}
        />
      )}
      <div
        className={clsx(
          'col-start-2',
          'col-span-2',
          'flex',
          'justify-center',
          'items-center',
        )}
      >
        <span>{i18n.message}</span>
      </div>
      {nextLink && (
        <NextButton
          className={clsx('w-32', 'col-start-4', 'col-span-1')}
          link={nextLink}
        />
      )}
    </div>
  </div>
);
