import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type PagePath<
  PageType extends 'stacked'
> = `/users/[username]/${PageType}`;

export type NumberedPagePath<
  PageType extends 'stacked'
> = `${PagePath<PageType>}/[number]`;

export type BaseComponentProps<T extends 'stacked'> = {
  className?: string;
  i18n: Record<'message', string>;
  previousLink?: {
    pathname: PagePath<T> | NumberedPagePath<T>;
    query: {username: string; number?: number};
  };
  nextLink?: {
    pathname: NumberedPagePath<T>;
    query: {username: string; number: number};
  };
};
export const BaseComponent: React.FC<BaseComponentProps<'stacked'>> = ({
  className,
  previousLink,
  nextLink,
  i18n,
}) => (
  <div className={clsx(className, 'flex')}>
    <div className={clsx('grid', 'mx-auto', 'grid-cols-4', 'gap-x-2')}>
      {previousLink && (
        <NextLink href={previousLink}>
          <a
            className={clsx(
              'col-start-1',
              'col-span-1',
              'flex',
              'justify-center',
              'items-center',
              'py-1',
              'px-2',
            )}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className={clsx('ml-2')}>Previous</span>
          </a>
        </NextLink>
      )}
      <div
        className={clsx(
          'col-start-2',
          'col-span-2',
          'flex',
          'items-center',
          'px-4',
        )}
      >
        <span>{i18n.message}</span>
      </div>
      {nextLink && (
        <NextLink href={nextLink}>
          <a
            className={clsx(
              'col-start-4',
              'col-span-1',
              'flex',
              'justify-center',
              'items-center',
              'py-1',
              'px-2',
            )}
          >
            <span className={clsx('mr-2')}>Next</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </NextLink>
      )}
    </div>
  </div>
);