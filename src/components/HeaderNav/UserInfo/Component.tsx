import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {Icon} from '~/components/common/Icon';
import {Dropdown, DropdownProps} from './Dropdown';

export type ComponentProps = {
  className?: string;
  currentUser: DropdownProps['data'];
};
export const PlainComponent: React.FC<ComponentProps> = ({
  className,
  currentUser: data,
}) => (
  <details className={clsx(className, 'relative', 'select-none')}>
    <summary
      className={clsx(
        'outline-none',
        'w-12',
        'h-12',
        'rounded-full',
        'overflow-hidden',
      )}
    >
      <Icon
        className={clsx('w-full', 'h-full', 'cursor-pointer')}
        picture={data.picture}
      />
    </summary>
    <Dropdown
      data={data}
      className={clsx('absolute', 'mt-0.5', 'top-full', 'right-0', 'z-50')}
    />
  </details>
);

export const Component = styled(PlainComponent)`
  > summary {
    &::-webkit-details-marker {
      display: none;
    }

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20;
    }
  }

  &:not([open]) > summary::before {
    display: none;
  }
`;
