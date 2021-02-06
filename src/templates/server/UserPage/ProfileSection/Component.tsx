import clsx from 'clsx';
import React from 'react';
import {Icon} from '~/components/common/Icon';

export type ComponentProps = {
  className?: string;
  picture: string;
  userName: string;
  displayName: string;
};
export const PlainComponent: React.FC<ComponentProps> = ({
  className,
  picture,
  userName,
  displayName,
}) => (
  <section className={clsx(className, 'flex', 'items-center')}>
    <Icon picture={picture} className={clsx('w-24', 'h-24')} />
    <div className={clsx('flex', 'flex-col', 'ml-4')}>
      <span className={clsx('text-2xl', 'font-bold', 'select-all')}>
        {displayName}
      </span>
      <span className={clsx('text-gray-400')}>
        @<span className={clsx('select-all')}>{userName}</span>
      </span>
    </div>
  </section>
);
