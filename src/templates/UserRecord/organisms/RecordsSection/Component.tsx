import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Record} from '~/components/molecules/Record';
import {NextButton, PreviousButton} from '../../molecules/Button';

export type ComponentProps = {
  className?: string;
  displayName: string;

  userName: string;
  pageNumber: number;
  hasPrevious: boolean;
  hasNext: boolean;

  records: {
    id: string;
    readAt?: string;
    user: {userName: string; picture: string; displayName: string};
    book: {id: string; title: string; subtitle?: string; cover?: string};
  }[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  records,
  userName,
  pageNumber,
  hasPrevious,
  hasNext,
}) => {
  const {t} = useTranslation();
  return (
    <section
      className={clsx(
        className,
        'bg-white',
        'py-6',
        'px-12',
        'flex',
        'flex-col',
      )}
    >
      {hasPrevious && (
        <PreviousButton
          className={clsx('w-full', 'mb-4')}
          {...{pageNumber, userName}}
        />
      )}
      <div className={clsx('mt-2', 'flex', 'flex-col', 'divide-y')}>
        {records.map((node: any) => (
          <Record className={clsx('w-full')} key={node.id} {...node} />
        ))}
      </div>
      {hasNext && (
        <NextButton
          className={clsx('w-full', 'mt-4')}
          {...{pageNumber, userName}}
        />
      )}
    </section>
  );
};
