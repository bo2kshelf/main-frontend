import clsx from 'clsx';
import React from 'react';
import {Left, Leftest, Right, Rightest} from '../../atoms/SliderButton';

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
    <div className={clsx('grid', 'grid-cols-4', 'gap-x-2')}>
      <Leftest
        className={clsx('col-start-1')}
        active={leftest}
        Link={({...props}) => <IndexLink {...props} />}
      />
      <Left
        className={clsx('col-start-2')}
        number={left}
        Link={({...props}) =>
          left === 1 ? <IndexLink {...props} /> : <NumberedLink {...props} />
        }
      />
      <Right
        className={clsx('col-start-3')}
        number={right}
        Link={({...props}) => <NumberedLink {...props} />}
      />
      <Rightest
        className={clsx('col-start-4')}
        number={rightest}
        Link={({...props}) => <NumberedLink {...props} />}
      />
    </div>
  </div>
);
