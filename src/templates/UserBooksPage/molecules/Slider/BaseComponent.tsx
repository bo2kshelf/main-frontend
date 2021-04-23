import clsx from 'clsx';
import React from 'react';
import {
  IconDoubleLeft,
  IconDoubleRight,
  IconLeft,
  IconRight,
} from '~/components/atoms/Icon/Component';

export type BaseComponentProps = {
  className?: string;

  IndexLink: React.FC<{className?: string}>;
  NumberedLink: React.FC<{className?: string; number: number}>;

  leftest: boolean;
  left?: number;
  right?: number;
  rightest?: number;
};

export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  leftest,
  left,
  right,
  rightest,
  IndexLink,
  NumberedLink,
}) => (
  <div className={clsx(className, 'flex', 'justify-center', 'items-center')}>
    <div className={clsx('grid', 'grid-cols-4')}>
      {leftest && (
        <IndexLink className={clsx('col-start-1')}>
          <IconDoubleLeft />
        </IndexLink>
      )}
      {left && left === 1 && (
        <IndexLink className={clsx('col-start-2')}>
          <IconLeft />
        </IndexLink>
      )}
      {left && left !== 1 && (
        <NumberedLink className={clsx('col-start-2')} number={left}>
          <IconLeft />
        </NumberedLink>
      )}
      {right && (
        <NumberedLink className={clsx('col-start-3')} number={right}>
          <IconRight />
        </NumberedLink>
      )}
      {rightest && (
        <NumberedLink className={clsx('col-start-4')} number={rightest}>
          <IconDoubleRight />
        </NumberedLink>
      )}
    </div>
  </div>
);
