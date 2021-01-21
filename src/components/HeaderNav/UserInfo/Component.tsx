import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import {Dropdown, DropdownProps} from './Dropdown';

export type ComponentProps = {
  className?: string;
  loading: boolean;
  data?: DropdownProps['data'];
};
export const PlainComponent: React.FC<ComponentProps> = ({
  className,
  loading,
  data,
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
      {loading && (
        <div
          className={clsx(
            'w-full',
            'h-full',
            'bg-gray-400',
            'text-white',
            'text-lg',
            'flex',
            'justify-center',
            'items-center',
          )}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
      )}
      {data && (
        <div className={clsx('relative', 'w-full', 'h-full', 'cursor-pointer')}>
          <NextImage src={data.picture} width={64} height={64} />
        </div>
      )}
    </summary>
    {data && (
      <Dropdown
        data={data}
        className={clsx('absolute', 'mt-0.5', 'top-full', 'right-0', 'z-50')}
      />
    )}
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
