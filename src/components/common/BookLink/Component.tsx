import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {BookCover} from '~/components/common/BookCover';

export type ComponentProps = {
  className?: string;
  link: string;
  title: string;
  cover?: string;
};
const PlainComponent: React.FC<ComponentProps> = ({
  className,
  link,
  cover,
  title,
}) => (
  <NextLink href={link}>
    <a className={clsx(className, 'relative', 'bg-gray-200')}>
      <BookCover
        className={clsx('cover', 'h-full')}
        title={title}
        cover={cover}
      />
    </a>
  </NextLink>
);

export const Component = styled(PlainComponent)`
  perspective: 400px;
  > .cover {
    transform-origin: center 5%;
    transition: transform 0.25s cubic-bezier(0.29, 0.12, 0.355, 1);
  }
  &:hover {
    > .cover {
      transform: translateZ(12px) rotateX(5deg);
    }
  }
`;
