import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';

export type ComponentProps = {
  className?: string;
  Summary: React.VFC<{className?: string}>;
  Content: React.VFC<{className?: string}>;
};
export const UnstyledComponent: React.VFC<ComponentProps> = ({
  className,
  Summary,
  Content,
}) => (
  <details className={clsx(className, 'relative', 'select-none')}>
    <Summary className={clsx()} />
    <Content className={clsx('absolute', 'top-full', 'z-50')} />
  </details>
);

export const Component = styled(UnstyledComponent)`
  > summary {
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 40;
    }
  }

  &:not([open]) > summary::before {
    display: none;
  }
`;
