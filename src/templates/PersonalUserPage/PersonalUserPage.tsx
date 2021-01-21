import clsx from 'clsx';
import NextImage from 'next/image';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {usePersonalUserPageQuery} from '~/_generated/apollo';

export type ComponentProps = {
  className?: string;
  picture: string;
  userName: string;
  displayName: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  picture,
  userName,
  displayName,
}) => (
  <main className={clsx(className)}>
    {children}
    <div className={clsx('flex')}>
      <div className={clsx('w-24', 'h-24', 'relative')}>
        <NextImage src={picture} width={128} height={128} />
      </div>
      <div className={clsx('flex', 'flex-col')}>
        <span className={clsx('text-xl', 'font-bold')}>{displayName}</span>
        <span className={clsx('text-gray-500')}>{`@${userName}`}</span>
      </div>
    </div>
  </main>
);

export type ContainerProps = Record<string, unknown>;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {t} = useTranslation();

  const {data, error, loading} = usePersonalUserPageQuery();

  return (
    <main>
      {data && <Component {...data.currentUser} />}
      {error && <p>{JSON.stringify(error)}</p>}
    </main>
  );
};
