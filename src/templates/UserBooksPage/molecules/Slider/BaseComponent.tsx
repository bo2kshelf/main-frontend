import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;

  userName: string;

  leftest: boolean;
  left?: number;
  right?: number;
  rightest?: number;

  Leftest: React.VFC<{className?: string; userName: string; active: boolean}>;
  Left: React.VFC<{className?: string; userName: string; number?: number}>;
  Right: React.VFC<{className?: string; userName: string; number?: number}>;
  Rightest: React.VFC<{className?: string; userName: string; number?: number}>;
};

export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  userName,
  leftest,
  left,
  right,
  rightest,
  Right,
  Rightest,
  Left,
  Leftest,
}) => (
  <div className={clsx(className, 'flex', 'justify-center', 'items-center')}>
    <div className={clsx('grid', 'grid-cols-4', 'gap-x-2')}>
      <Leftest
        className={clsx('col-start-1')}
        userName={userName}
        active={leftest}
      />
      <Left className={clsx('col-start-2')} userName={userName} number={left} />
      <Right
        className={clsx('col-start-3')}
        userName={userName}
        number={right}
      />
      <Rightest
        className={clsx('col-start-4')}
        userName={userName}
        number={rightest}
      />
    </div>
  </div>
);
